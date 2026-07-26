// priority: 100
/**
 * @import { RegistryTypes } from "@special/types"
 * @import { $KubeAssetGenerator } from "@package/dev/latvian/mods/kubejs/generator"
 */

/**
 * @typedef {object} EmiGroupDefCommon
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [enabled]
 */

/**
 * @typedef {RegistryTypes.Item | `#${RegistryTypes.ItemTag}` | `fluid:${RegistryTypes.Fluid}` | `biome:${RegistryTypes.WorldgenBiome}`} EmiGroupElement
 */

/**
 * @typedef {object} EmiGroupDefGroup
 * @property {"emixx:group"} type
 * @property {(EmiGroupElement)[]} contents
 * @property {(EmiGroupElement)[]} [exclusions]
 */
/**
 * @typedef {object} EmiGroupDefTag
 * @property {"emixx:tag"} type
 * @property {RegistryTypes.ItemTag} tag
 */
/**
 * @typedef {object} EmiGroupDefRegex
 * @property {"emixx:regex"} type
 * @property {string} regex
 */

/**
 * @typedef {EmiGroupDefCommon & (EmiGroupDefGroup | EmiGroupDefTag | EmiGroupDefRegex)} EmiGroupDef
 */

/**
 * @type {Record<string, EmiGroupDef>}
 */
const EMI_GROUPS = {};

const EMI = {
  /**
   * @typedef {ValueOrArray<RegExp | EmiGroupElement>} EmiGroupEntry
   */
  /**
   *
   * @param {$KubeAssetGenerator} event
   * @param {string} mod
   * @param {string} name The name of the group
   * @param {EmiGroupEntry[]} entries
   */
  add: (event, mod, name, entries) => {
    /**
     * @type {RegistryTypes.Item[]}
     */
    const group = [];
    if (!Array.isArray(entries)) entries = [entries];

    if (entries.length === 1 && typeof entries[0] === 'string' && entries[0].startsWith('#')) {
      EMI._add(event, mod, name, 'tag', /** @type {RegistryTypes.ItemTag} */ (entries[0]));
    }

    for (const entry of entries) {
      EMI._extractIngredient(group, entry);
    }

    EMI._add(event, mod, name, 'group', /** @type {RegistryTypes.Item[]} */ (group));
  },
  /**
   *
   * @param {$KubeAssetGenerator} event
   * @param {string} tag
   */
  addTagged: (event, tag) => {
    EMI._add(event, 'kubejs', tag.replace(/\//g, '_'), 'tag', /** @type {RegistryTypes.ItemTag} */ ('kubejs:' + tag));
  },
  /**
   *
   * @param {$KubeAssetGenerator} event
   * @param {string} mod
   * @param {string} name The name of the group
   * @param {EmiGroupDef} data
   */
  addCustom(event, mod, name, data) {
    let file = `${mod}:stack_groups/${name}`;
    event.json(file, /** @type {any} */ (data));
  },
  /**
   * Add a new group to EMI++
   *
   * @param {$KubeAssetGenerator} event
   * @param {string} mod
   * @param {string} name The name of the group
   * @param {'group' | 'tag'} type
   * @param {RegistryTypes.ItemTag | RegistryTypes.Item[] | string} data
   */
  _add: (event, mod, name, type, data) => {
    let file = `${mod}:stack_groups/${name}`;
    /**
     * @type {EmiGroupDef}
     */
    let obj;

    if (type === 'group') {
      obj = {
        type: 'emixx:group',
        contents: /** @type {RegistryTypes.Item[]} */ (data),
      };
    } else if (type === 'tag') {
      obj = {
        type: 'emixx:tag',
        tag: /** @type {RegistryTypes.ItemTag} */ (data),
      };
    } else {
      throw new Error('Bad type - ' + type);
    }

    if (EMI_GROUPS[file]) {
      throw new Error('Duplicate EMI group definition - ' + file);
    }
    if (obj.type === 'emixx:group' && obj.contents.length === 0) {
      throw new Error('Empty tag group');
    }
    event.json(file, /** @type {any} */ (obj));
  },
  /**
   *
   * @param {(RegistryTypes.Item|string)[]} group
   * @param {EmiGroupEntry} ingredient
   */
  _extractIngredient: (group, ingredient) => {
    if (Array.isArray(ingredient)) {
      for (const elem of ingredient) {
        EMI._extractIngredient(group, elem);
      }
      return;
    }

    switch (typeof ingredient) {
      case 'string':
        group.push(ingredient);
        break;
      case 'function':
        for (const item of Ingredient.of(/** @type {any}*/ (ingredient)).itemIds.toArray()) {
          group.push(/** @type {RegistryTypes.Item} */ (String(item)));
        }
        break;
      default:
        throw new Error('Bad ingredient - ' + ingredient);
    }
  },
};
