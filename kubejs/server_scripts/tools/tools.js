// priority: 100

/**
 * @typedef {"axe"|"pickaxe"|"shovel"|"sword"|"hoe"|"bow"|ArmorToolKind|GolemToolKind|GolemArmorKind} ToolKind
 */
/**
 * @typedef {"helmet"|"chestplate"|"leggings"|"boots"|"horse_armor"} ArmorToolKind
 */

/**
 * @typedef {"golem_spear"|"golem_axe"|"golem_sword"|"golem_bow"} GolemToolKind
 * @typedef {"golem_helmet"|"golem_chestplate"|"golem_leggings"|"golem_boots"} GolemArmorKind
 */

/**
 * @typedef {{tag: RegistryTypes.ItemTag, count?: number} | {item: RegistryTypes.Item, count?: number}} UpgradeMaterial
 */

/**
 * @typedef {`${number}`|`${number}+`|`${number}*`} ToolTierStr
 */

/**
 * @typedef {[RegistryTypes.Item, number, ...number[]]} ToolRecycleResult
 */

/**
 * @typedef {Object} ToolMaterial
 * @property {ToolTierStr} tier
 * @property {RegistryTypes.Item|null} template
 * @property {UpgradeMaterial} material
 * @property {`${string}`} [parent]
 * @property {Partial<Record<ToolKind | string, RegistryTypes.Item>>} nameMapping
 * @property {RegistryTypes.Item[]} knownItems
 * @property {ToolRecycleResult[]} recycleResults
 * @property {boolean} [keepCrafting]
 */

const TOOLS = {
  /**
   *
   * @param {string} materialId
   * @param {Omit<ToolMaterial, "nameMapping" | "knownItems"> & {nameMapping?: Partial<Record<ToolKind, string>>, noTemplateTags?: boolean, idTemplate?: `${string}:${string}$0${string}`} & ({whitelist: ToolKind[]} | {blacklist: ToolKind[]} | {})} mat
   */
  newMaterial: (materialId, mat) => {
    if (mat.template !== null && !mat.noTemplateTags) {
      REG.addTag(TOOLS.tierTag('smithing_template', mat.tier), [mat.template]);
      REG.addTag(TOOLS.tierTag(null, mat.tier), [mat.template]);
      REG.addTag('kubejs:smithing_template', [mat.template]);
    }

    if (!mat.idTemplate && !mat.nameMapping) {
      throw new Error(
        'Material `' + materialId + "` doesn't define id template nor name mapping, no tools can be created for it",
      );
    }

    /**
     * @type {Record<string, boolean>}
     */
    const whitelist = {};
    for (const k of TOOLS.ALL_KINDS) {
      whitelist[k] = false;
    }
    if ('whitelist' in mat) {
      for (const k of mat.whitelist) {
        whitelist[k] = true;
      }
    } else {
      for (const k of TOOLS.ALL_KINDS) {
        whitelist[k] = true;
      }
      if ('blacklist' in mat) {
        for (const k of mat.blacklist) {
          whitelist[k] = false;
        }
      }
    }

    /**
     * @type {Record<string, RegistryTypes.Item>}
     */
    const nameMapping = {};
    /**
     * @type {RegistryTypes.Item[]}
     */
    const knownItems = [];

    for (const k of TOOLS.ALL_KINDS) {
      let mappedId = mat.nameMapping && mat.nameMapping[k];
      let templatedId = mat.idTemplate && mat.idTemplate.replace('$0', k);
      let id =
        /** @type {RegistryTypes.Item | null} */
        (mappedId || templatedId || null);
      if (!id || !Item.exists(id)) {
        // only error on explicit mapping, not on generated string
        if (mappedId) {
          throw new Error(
            'nameMapping for material `' + id + '` specifies nonexistant item `' + id + '` for tool ' + k,
          );
        }
        continue;
      }
      nameMapping[k] = /** @type {RegistryTypes.Item} */ (id);
      knownItems.push(id);

      if (whitelist[k]) {
        REG.addTag(TOOLS.tierTag(k, mat.tier), id);
        REG.addTag(TOOLS.tierTag(null, mat.tier), id);
        REG.addTag(TOOLS.materialTag(materialId), id);
        for (const recyclesInto of TOOLS.thisRecyclesIntoTags(k, mat.tier)) {
          REG.addTag(recyclesInto, id);
        }
        for (const upgradesInto of TOOLS.thisUpgradesIntoTags(k, mat.tier)) {
          REG.addTag(upgradesInto, id);
        }
      }
    }

    if (materialId in TOOLS.REGISTRY) {
      throw new Error('Duplicate tool material id - `' + materialId + '`');
    }

    TOOLS.REGISTRY[materialId] = {
      tier: mat.tier,
      template: mat.template,
      material: mat.material,
      nameMapping: nameMapping,
      knownItems: knownItems,
      keepCrafting: mat.keepCrafting,
      recycleResults: mat.recycleResults,
    };
  },

  /**
   * @param {import("@package/dev/latvian/mods/kubejs/recipe").$RecipesKubeEvent} event
   * @param {string} kind
   * @param {RegistryTypes.Item} result
   * @param {string} template
   * @param {IngredientInfo} parent
   * @param {UpgradeMaterial} material
   */
  toolUpgrade: (event, kind, result, template, parent, material) => {
    event
      .custom({
        type: (material.count ?? 1) > 1 ? 'apotheosis:sized_upgrade_recipe' : 'minecraft:smithing_transform',
        addition: material,
        base: Ingredient.of(parent).toJson(),
        result: {
          id: result,
        },
        template: {
          item: template,
        },
      })
      .id('kubejs:equipment/' + Item.of(result).idLocation.path + '/' + kind);
  },

  /**
   * @type {Record<string, ToolMaterial>}
   */
  REGISTRY: {},

  TOOLS_ONLY: /** @type {ToolKind[]} */ (['axe', 'pickaxe', 'shovel', 'sword', 'hoe']),
  /**
   * @type {ToolKind[]}
   */
  ARMOR_ONLY: /** @type {ToolKind[]} */ (['helmet', 'chestplate', 'leggings', 'boots']),

  GOLEM_ALL: /** @type {(GolemToolKind|GolemArmorKind)[]} */ ([
    'golem_spear',
    'golem_axe',
    'golem_sword',
    'golem_helmet',
    'golem_chestplate',
    'golem_leggings',
    'golem_boots',
  ]),

  ALL_KINDS: /** @type {ToolKind[]} */ ([]),
  VANILLA_TOOLS: /** @type {ToolKind[]} */ ([]),

  /**
   * @type {Record<ToolKind, true>}
   */
  ALL_KINDS_MAP: {
    axe: true,
    pickaxe: true,
    shovel: true,
    sword: true,
    hoe: true,
    bow: true,
    helmet: true,
    chestplate: true,
    leggings: true,
    boots: true,
    horse_armor: true,
    golem_spear: true,
    golem_axe: true,
    golem_sword: true,
    golem_helmet: true,
    golem_chestplate: true,
    golem_leggings: true,
    golem_boots: true,
    golem_bow: true,
  },

  /**
   *
   * @param {ToolKind | "smithing_template"} tool
   * @returns {string}
   */
  toolTagId: (tool) => {
    if (tool === 'smithing_template') {
      return 'smithing_template/';
    } else {
      return 'equipment/' + tool + '/';
    }
  },

  /**
   * @param {ToolKind | "smithing_template" | null} tool
   * @param {ToolTierStr | number} tier
   * @returns {RegistryTypes.ItemTag}
   */
  tierTag: (tool, tier) => {
    if (typeof tier === 'number') tier = /** @type {`${number}`} */ (String(tier));
    let tierName = 'tier_' + tier.replace('*', '_special').replace('+', '_plus');
    let tag = tool !== null ? 'kubejs:' + TOOLS.toolTagId(tool) + tierName : 'kubejs:equipment/' + tierName;
    return /** @type {RegistryTypes.ItemTag} */ (tag);
  },

  /**
   *
   * @param {string} mat
   * @return {RegistryTypes.ItemTag}
   */
  materialTag: (mat) => {
    return /** @type {RegistryTypes.ItemTag} */ ('kubejs:equipment/material/' + mat);
  },

  /**
   * Tag for which tier this tool recycles into
   * @param {ToolKind} tool
   * @param {ToolTierStr} tier
   * @returns {RegistryTypes.ItemTag[]}
   */
  thisRecyclesIntoTags: (tool, tier) => {
    let targetTier = '';

    let plus = true;
    if (tier.endsWith('*') || tier.endsWith('+')) {
      targetTier = tier.replace('*', '').replace('+', '');
      plus = false;
    } else {
      let num = Number(tier) - 1;
      if (num < 0) {
        return [];
      }
      targetTier = String(num);
    }
    let tag = 'kubejs:' + TOOLS.toolTagId(tool) + 'recycles_into_tier/' + targetTier;
    return /** @type {RegistryTypes.ItemTag[]} */ (plus ? [tag, tag + '_plus'] : [tag]);
  },

  /**
   * Tag tools can recycle into this tool
   * @param {ToolKind} tool
   * @param {ToolTierStr} tier
   * @param {string} material
   * @returns {RegistryTypes.ItemTag[]}
   */
  recyclesIntoThisTags: (tool, tier, material) => {
    let materialTag = TOOLS.recyclesIntoMaterialTag(tool, material);
    if (tier.endsWith('*')) return [materialTag];
    if (tier.endsWith('+')) {
      return /** @type {RegistryTypes.ItemTag[]} */ ([
        materialTag,
        'kubejs:' + TOOLS.toolTagId(tool) + 'recycles_into_tier/' + tier.replace('+', '') + '_plus',
      ]);
    }
    return /** @type {RegistryTypes.ItemTag[]} */ ([
      materialTag,
      'kubejs:' + TOOLS.toolTagId(tool) + 'recycles_into_tier/' + tier,
    ]);
  },
  /**
   * Tag for which tier this tool upgrades into
   * @param {ToolKind} tool
   * @param {ToolTierStr} tier
   * @returns {RegistryTypes.ItemTag[]}
   */
  thisUpgradesIntoTags: (tool, tier) => {
    // special tiers don't upgrade by default
    if (tier.endsWith('*')) return [];

    const rawTier = TOOLS.rawTier(tier);

    const nextTierTag = /** @type {RegistryTypes.ItemTag} */ (
      'kubejs:' + TOOLS.toolTagId(tool) + 'upgrades_into_tier/' + (rawTier + 1)
    );

    if (tier.endsWith('+')) {
      return [nextTierTag];
    }
    return /** @type {RegistryTypes.ItemTag[]} */ ([
      nextTierTag,
      'kubejs:' + TOOLS.toolTagId(tool) + 'upgrades_into_tier/' + rawTier + '_plus',
      'kubejs:' + TOOLS.toolTagId(tool) + 'upgrades_into_tier/' + rawTier + '_special',
    ]);
  },

  /**
   * Tag tools can upgrade into this tool
   * @param {ToolKind} tool
   * @param {ToolTierStr} tier
   * @param {string} material
   * @returns {RegistryTypes.ItemTag[]}
   */
  upgradesIntoThisTags: (tool, tier, material) => {
    return /** @type {RegistryTypes.ItemTag[]} */ ([
      'kubejs:' + TOOLS.toolTagId(tool) + 'upgrades_into_tier/' + tier.replace('+', '_plus').replace('*', '_special'),
      TOOLS.upgradesIntoMaterialTag(tool, material),
    ]);
  },

  /**
   * Returns a tag for tools that can be recycled into specified material
   * @param {ToolKind} tool
   * @param {string} material
   * @returns {RegistryTypes.ItemTag}
   */
  recyclesIntoMaterialTag: (tool, material) => {
    return /** @type {RegistryTypes.ItemTag} */ ('kubejs:' + TOOLS.toolTagId(tool) + 'recycles_into/' + material);
  },
  /**
   * Returns a tag for tools that can be upgraded into specified material
   * @param {ToolKind} tool
   * @param {string} material
   * @returns {RegistryTypes.ItemTag}
   */
  upgradesIntoMaterialTag: (tool, material) => {
    return /** @type {RegistryTypes.ItemTag} */ ('kubejs:' + TOOLS.toolTagId(tool) + 'upgrades_into/' + material);
  },

  /**
   * @param {string} tier
   * @returns {number}
   */
  rawTier: (tier) => {
    return Number(tier.replace('*', '').replace('+', ''));
  },
};

REG.yeetItem('l2complements:material_swap_smithing_template');
REG.yeetRecipeFilter({
  input: 'l2complements:material_swap_smithing_template',
});

for (const k in TOOLS.ALL_KINDS_MAP) {
  TOOLS.ALL_KINDS.push(/** @type {ToolKind} */ (k));
}

ServerEvents.recipes((event) => {
  event.remove({ id: /^apotheosis:smithing\/upgrade_.+_to_.+$/ });
  event.remove({
    id: /^apotheosis:salvaging\/other\/(wooden|stone|leather|chain|iron|gold(en)?|diamond|netherite)_(tools|(horse_)?armor)$/,
  });
  event.remove({ id: /^create:crushing\/.+_horse_armor$/ });
  event.remove({ id: /^l2complements:generated_tools\/.+\/recycle\/.+$/ });
  event.remove({ id: /^minecraft:(iron|gold(en)?|copper)_nugget_from_(smelting|blasting)$/ });
  event.remove({ id: /^modulargolems:crushing\/(roman|wind|barbaric).+$/ });
  event.remove({ id: /^modulargolems:crushing\/.+golem_(sword|axe|spear)$/ });

  for (const name in TOOLS.REGISTRY) {
    let mat = TOOLS.REGISTRY[name];

    if (mat.recycleResults.length > 0) {
      /**
       * @type {typeof CreateProcessingOutput[]}
       */
      let results = [];
      for (const res of mat.recycleResults) {
        let id = res[0];
        for (let i = 1; i < res.length; i++) {
          let num = /** @type {number} */ (res[i]);
          if (num >= 1 && Math.floor(num) === num) {
            // num is amount
            results.push(Item.of(id, num));
          } else if (num > 0 && num <= 1) {
            // num is chance
            results.push(CreateItem.of(id, num));
          } else {
            throw new Error(
              'Result amount must be integer greater or equal to 1, or a float chance in (0,1], instead got `' +
                num +
                '`',
            );
          }
        }
      }
      event.recipes.create.crushing(results, [mat.knownItems]).id('kubejs:equipment/' + name + '/recycling');
    }

    for (const toolId of TOOLS.ALL_KINDS) {
      let item = mat.nameMapping[toolId];
      if (!item) continue;

      let childrenTags = TOOLS.recyclesIntoThisTags(toolId, mat.tier, name);
      /**
       * @type {RegistryTypes.Item[]}
       */
      let childrenItems = [];
      for (const childTag of childrenTags) {
        itemIdsFor({ tag: childTag }, childrenItems);
      }
      if (childrenItems.length > 0) {
        TOOLS.toolUpgrade(event, 'downgrade', item, 'kubejs:downgrade_template', childrenItems, mat.material);
      }

      if (mat.template === null) continue;

      let parentTags = TOOLS.upgradesIntoThisTags(toolId, mat.tier, name);
      /**
       * @type {RegistryTypes.Item[]}
       */
      let parentItems = [];
      for (const parentTag of parentTags) {
        itemIdsFor({ tag: parentTag }, parentItems);
      }

      if (parentItems.length > 0) {
        if (!mat.keepCrafting) {
          event.remove({ output: item });
        }
        TOOLS.toolUpgrade(event, 'upgrade', item, mat.template, parentItems, mat.material);
      }
    }
  }
});
