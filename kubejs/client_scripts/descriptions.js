// priority: 0

ItemEvents.modifyTooltips((e) => {
  e.add('#createchaincompat:valid_for_chain_conveyor', [
    {
      translate: 'kubejs.valid_for_chain_conveyor',
    },
  ]);

  /**
   *z
   * @param {RegistryTypes.Item} id
   * @param {string} material
   * @param {RegistryTypes.Item|null} ingredient
   * @param {"item"|"block"} [ingredientType]
   */
  function templateDesc(id, material, ingredient, ingredientType) {
    const key = 'kubejs.smithing.' + material;
    e.modify(id, (lines) => {
      lines.clear();
      lines.add([
        { translate: 'item.' + Item.of(id).idLocation.toLanguageKey() },
        { translate: key + '.upgrade', color: 'gray' },
        '',
        {
          translate: 'item.minecraft.smithing_template.applies_to',
          color: 'gray',
        },
        [' ', { translate: key + '.applies_to', color: 'blue' }],
        {
          translate: 'item.minecraft.smithing_template.ingredients',
          color: 'gray',
        },
      ]);

      if (ingredient !== null) {
        lines.add([
          [
            ' ',
            {
              translate: (ingredientType ?? 'item') + '.' + Item.of(ingredient).idLocation.toLanguageKey(),
              color: 'blue',
            },
          ],
        ]);
      } else {
        lines.add([[' ', { translate: key + '.ingredients', color: 'blue' }]]);
      }
    });
  }

  templateDesc('kubejs:stone_upgrade_smithing_template', 'stone', 'minecraft:cobblestone', 'block');
  templateDesc('kubejs:copper_upgrade_smithing_template', 'copper', 'minecraft:copper_ingot');
  templateDesc('apotheosis:iron_upgrade_smithing_template', 'iron', 'minecraft:iron_ingot');
  templateDesc('apotheosis:gold_upgrade_smithing_template', 'gold', 'minecraft:gold_ingot');
  templateDesc('apotheosis:diamond_upgrade_smithing_template', 'diamond', 'minecraft:diamond');
  templateDesc('kubejs:totemic_gold_upgrade_smithing_template', 'totemic_gold', 'l2complements:totemic_gold_ingot');
  templateDesc('kubejs:poseidite_upgrade_smithing_template', 'poseidite', 'l2complements:poseidite_ingot');
  templateDesc('kubejs:shulkerate_upgrade_smithing_template', 'shulkerate', 'l2complements:shulkerate_ingot');
  templateDesc('l2complements:eternal_upgrade_smithing_template', 'eternium', 'l2complements:eternium_ingot');
  templateDesc('kubejs:sculkium_upgrade_smithing_template', 'sculkium', 'l2complements:sculkium_ingot');
  templateDesc('kubejs:refined_radiance_upgrade_smithing_template', 'refined_radiance', 'create:refined_radiance');
  templateDesc('kubejs:shadow_steel_upgrade_smithing_template', 'shadow_steel', 'create:shadow_steel');
  templateDesc('rainbowcompound:obsidianite_upgrade_kit', 'obsidianite', 'rainbowcompound:obsidianite_ingot');
  templateDesc('rainbowcompound:rainbow_upgrade_kit', 'rainbow', 'rainbowcompound:obsidianite_ingot');
  templateDesc('l2complements:frost_upgrade_smithing_template', 'frost', 'l2complements:heirophant_green');
  templateDesc('l2complements:flame_upgrade_smithing_template', 'flame', 'l2complements:sun_membrane');
  templateDesc('kubejs:downgrade_template', 'downgrade', null);
  templateDesc('kubejs:golem_axe_mould', 'golem_axe', null);
  templateDesc('kubejs:golem_spear_mould', 'golem_spear', null);
  templateDesc('kubejs:golem_sword_mould', 'golem_sword', null);
  templateDesc('kubejs:golem_helmet_template', 'golem_helmet', null);
  templateDesc('kubejs:golem_chestplate_template', 'golem_chestplate', null);
  templateDesc('kubejs:golem_leggings_template', 'golem_leggings', null);
  templateDesc('kubejs:golem_boots_template', 'golem_boots', null);

  /**
   * @type {import("@package/dev/latvian/mods/kubejs/color").$KubeColor_[]}
   */
  const tierColors = ['gray', 'white', 'green', 'aqua', 'gold', 'light_purple'];

  for (const tier of [0, 1, 2, 3, 4, 5]) {
    let comp = {
      translate: 'kubejs.equipment.tier_' + tier,
      color: tierColors[tier],
    };
    e.add(/** @type {`#${RegistryTypes.ItemTag}`} */ ('#kubejs:equipment/tier_' + tier), [comp]);
    e.add(/** @type {`#${RegistryTypes.ItemTag}`} */ ('#kubejs:equipment/tier_' + tier + '_plus'), [
      {
        translate: 'kubejs.equipment.tier_plus',
        color: tierColors[tier],
        with: [comp],
      },
    ]);
    e.add(/** @type {`#${RegistryTypes.ItemTag}`} */ ('#kubejs:equipment/tier_' + tier + '_special'), [
      {
        translate: 'kubejs.equipment.tier_special',
        color: tierColors[tier],
        with: [comp],
      },
    ]);
  }
});

ClientEvents.lang('en_us', (evt) => {
  evt.add('item.minecraft.smithing_template.netherite_upgrade.applies_to', 'Tier 3 equipment');
  evt.add(
    'item.minecraft.smithing_template.netherite_upgrade.base_slot_description',
    'Add Tier 3 armor, weapon or tool',
  );
  evt.renameItem('rainbowcompound:rainbow_upgrade_kit', 'Smithing Template');
  evt.renameItem('rainbowcompound:obsidianite_upgrade_kit', 'Smithing Template');
  evt.renameItem('l2complements:eternal_upgrade_smithing_template', 'Smithing Template');
  evt.renameItem('l2complements:frost_upgrade_smithing_template', 'Smithing Template');
  evt.renameItem('l2complements:flame_upgrade_smithing_template', 'Smithing Template');

  const toolCats = [
    ['axe', 'Axe'],
    ['pickaxe', 'Pickaxe'],
    ['shovel', 'Shovel'],
    ['sword', 'Sword'],
    ['hoe', 'Hoe'],
    ['helmet', 'Helmet'],
    ['chestplate', 'Chestplate'],
    ['leggings', 'Leggings'],
    ['boots', 'Boots'],
    ['horse_armor', 'Horse Armor'],
    ['golem_spear', 'Golem_spear'],
    ['golem_axe', 'Golem Axe'],
    ['golem_sword', 'Golem Sword'],
    ['golem_helmet', 'Golem Helmet'],
    ['golem_chestplate', 'Golem Chestplate'],
    ['golem_leggings', 'Golem Leggings'],
    ['golem_boots', 'Golem Boots'],
  ];

  const materials = [
    ['wood', 'Wooden'],
    ['stone', 'Stone'],
    ['leather', 'Leather'],
    ['chainmail', 'Chainmail'],
    ['copper', 'Copper'],
    ['iron', 'Iron'],
    ['diamond', 'Diamond'],
    ['netherite', 'Netherite'],
    ['totemic_gold', 'Totemic Gold'],
    ['poseidite', 'Poseidite'],
    ['shulkerate', 'Shulkerate'],
    ['sculkium', 'Sculkium'],
    ['eternium', 'Eternium'],
    ['obsidianite', 'Obsidianite'],
    ['shadow_steel', 'Shadow Steel'],
    ['refined_radiance', 'Refined Radiance'],
    ['rainbow', 'Rainbow'],
  ];

  for (const tool of toolCats) {
    for (const mat of materials) {
      evt.add(
        'tag.item.kubejs.equipment.' + tool[0] + '.recycles_into.' + mat[0],
        'Recyclable into ' + mat[1] + ' ' + tool[1],
      );
      evt.add(
        'tag.item.kubejs.equipment.' + tool[0] + '.upgrades_into.' + mat[0],
        'Upgradable into ' + mat[1] + ' ' + tool[1],
      );
    }

    for (const n of [0, 1, 2, 3, 4, 5]) {
      for (const bonus of [
        ['', ''],
        ['_plus', '+'],
        ['_special', ' Special'],
      ]) {
        evt.add(
          'tag.item.kubejs.equipment.' + tool[0] + '.recycles_into_tier.' + n + bonus[0],
          'Recyclable into Tier ' + n + bonus[1] + ' ' + tool[1],
        );
        evt.add(
          'tag.item.kubejs.equipment.' + tool[0] + '.upgrades_into_tier.' + n + bonus[0],
          'Upgradable into Tier ' + n + bonus[1] + ' ' + tool[1],
        );
      }
    }
  }

  for (const material of materials) {
    evt.add('tag.item.kubejs.equipment.material.' + material[0], material[1] + ' Equipment');
  }

  for (const def of [
    ['copper', 'Extraction'],
    ['inverted_copper', 'Inverted Extraction'],
    ['advanced_copper', 'Advanced Extraction'],
    ['inverted_advanced_copper', 'Inverted Advanced Extraction'],
    ['iron', 'Routing'],
    ['lapis', 'Container-First', 'Tank-First'],
    ['golden', 'Acceleration'],
    ['diamond', 'Sorting'],
    ['flint', 'Dispenser'],
    ['obsidian', 'Voiding'],
    ['bone', 'Randomizer'],
  ]) {
    evt.renameItem(/** @type {RegistryTypes.Item} */ ('classicpipes:' + def[0] + '_pipe'), def[1] + ' Pipe');
    let fluidPipe = /** @type {RegistryTypes.Item} */ ('classicpipes:' + def[0] + '_fluid_pipe');
    if (Item.exists(fluidPipe)) {
      evt.renameItem(fluidPipe, (def[2] ?? def[1]) + ' Fluid Pipe');
    }
  }

  evt.renameItem('classicpipes:copper_pipe', 'Extraction Pipe');
  evt.renameItem('classicpipes:inverted_copper_pipe', 'Inverted Extraction Pipe');
});
