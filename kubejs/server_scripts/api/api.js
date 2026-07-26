// priority: 1000

/**
 * @import { RegistryTypes } from "@special/types"
 * @import { $RecipeFilter_ as RecipeFilter } from "@package/dev/latvian/mods/kubejs/recipe/filter"
 * @import { $Ingredient_ as IngredientInfo } from "@package/net/minecraft/world/item/crafting"
 */

/**
 * @typedef {typeof CreateItem | import('@package/net/minecraft/world/item').$ItemStack_ | RegistryTypes.Item} $ProcessingOutput
 */

/**
 * @typedef {Partial<Record<RegistryTypes.ItemTag, T>>} TagMap
 * @template {unknown} T
 */

/**
 * @typedef {Partial<Record<RegistryTypes.Item, T>>} ItemMap
 * @template {unknown} T
 */

/**
 * @typedef {Object} Cog
 * @property {RegistryTypes.Item} base
 * @property {RegistryTypes.Item | null} shaftless
 * @property {RegistryTypes.Item | null} hollow
 * @property {RegistryTypes.Item[]} extras
 *
 * @property {RegistryTypes.Item[]} allCogs
 *
 * @property {RegistryTypes.ItemTag | null} parent
 * @property {RegistryTypes.Item | `#${RegistryTypes.ItemTag}` | null} material
 * @property {boolean} consumeMaterial
 */

/**
 * @type {Record<string, Cog>}
 */
const COGS = {};

/**
 * @typedef {Object} Encasing
 * @property {RegistryTypes.Item} result
 * @property {RegistryTypes.Item} base
 * @property {RegistryTypes.Item} material
 * @property {boolean} inWorldOnly
 */

/**
 * @type {Encasing[]}
 */
const ENCASINGS = [];

/**
 * @type {Encasing[]}
 */
const PAINTINGS = [];

/**
 * @typedef {Object} TagGrouping
 *
 * @property {RegistryTypes.Item} [primary]
 * @property {RegistryTypes.Item[]} items
 * @property {RegistryTypes.Item[]} recipesWhitelist
 * @property {boolean} [noSelector]
 * @property {boolean} [noMoreClutter]
 */

/**
 * @type {Record<string, TagGrouping>}
 */
const TAG_GROUPINGS = {};

/**
 * @type {Record<string, RegistryTypes.Item[]>}
 */
const ADD_TAGS = {};

/**
 * @typedef {Object} MachineryDef
 *
 * @property {RegistryTypes.Item} machine
 * @property {[RegistryTypes.Item, number][]} sawing
 * @property {[RegistryTypes.Item, number, RegistryTypes.Item][]} applying
 * @property {boolean} [noInWorldCrafting]
 * @property {boolean} [allowNormalCrafting]
 */

/**
 * @type {MachineryDef[]}
 */
const MACHINERY = [];

/**
 * @type {RecipeFilter[]}
 */
const YEET_RECIPES = [];

/**
 * @type {RegistryTypes.Item[]}
 */
const YEET_TAGS_FROM = [];

/**
 * @typedef ItemFlip
 * @property {RegistryTypes.Item} a
 * @property {RegistryTypes.Item} b
 * @property {boolean} noMoreClutter
 */

/**
 * @type {ItemFlip[]}
 */
const ITEM_FLIPS = [];

/**
 * @typedef ChippedTagDef
 * @property {RegistryTypes.ItemTag} tag
 * @property {RegistryTypes.Item} primaryItem
 */

/**
 * @type {Partial<Record<RegistryTypes.ItemTag, RegistryTypes.Item>>}
 */
const ALL_CHIPPED_TAGS = {};

/**
 * @type {RegistryTypes.Item[]}
 */
const HIDE_ITEMS_FROM_VIEWER = [];

/**
 * @typedef {object} ColoringDef
 * @property {RegistryTypes.Item[]} uncolored
 * @property {string} tag
 * @property {RegExp} coloredRegex
 * @property {ColorName | RegistryTypes.Item | "-"} washingResult
 * @property {1|2|3|4|5|6|7|8} batchSize
 */

/**
 * @type {ColoringDef[]}
 */
const COLORINGS = [];

/**
 * @typedef {'white'|'orange'|'magenta'|'light_blue'|'yellow'|'lime'|'pink'|'gray'|'light_gray'|'cyan'|'purple'|'blue'|'brown'|'green'|'red'|'black'} ColorName
 */

/**
 * @type {ColorName[]}
 */
const ALL_COLORS = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black',
];

const COLOR_REGEX =
  'white|orange|magenta|light_blue|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black';

const REG = {
  /**
   *
   * @param {RegistryTypes.ItemTag | string} tag
   * @param {Omit<Partial<Cog> & Pick<Cog, "base">, "allCogs">} cog
   */
  cog: (tag, cog) => {
    assert.param('tag', tag, 'string');
    assert.param('cog.base', cog.base, 'string');
    const allCogs = [cog.base];
    if (cog.hollow) allCogs.push(cog.hollow);
    if (cog.shaftless) allCogs.push(cog.shaftless);
    if (cog.extras) for (const extra of cog.extras) allCogs.push(extra);
    COGS[/** @type {RegistryTypes.ItemTag} */ (tag)] = {
      base: cog.base,
      shaftless: cog.shaftless ?? null,
      hollow: cog.hollow ?? null,
      extras: cog.extras ?? [],

      parent: cog.parent ?? null,
      material: cog.material ?? null,
      consumeMaterial: cog.consumeMaterial ?? false,

      allCogs: allCogs,
    };
    REG.tagGroup(tag, {
      primary: cog.base,
      items: allCogs,
      recipesWhitelist: [],
    });
  },

  /**
   *
   * @param {RegistryTypes.Item} result
   * @param {RegistryTypes.Item} base
   * @param {RegistryTypes.Item} material
   * @param {boolean} [inWorldOnly]
   */
  encasing: (result, base, material, inWorldOnly) => {
    assert.param('result', result, 'string');
    assert.param('base', base, 'string');
    assert.param('material', material, 'string');
    assert.param('inWorldOnly', inWorldOnly, 'boolean?');
    ENCASINGS.push({
      result: result,
      base: base,
      material: material,
      inWorldOnly: inWorldOnly ?? false,
    });
  },

  /**
   *
   * @param {RegistryTypes.Item} result
   * @param {RegistryTypes.Item} base
   * @param {RegistryTypes.Item} material
   * @param {boolean} [inWorldOnly]
   */
  painting: (result, base, material, inWorldOnly) => {
    assert.param('result', result, 'string');
    assert.param('base', base, 'string');
    assert.param('material', material, 'string');
    assert.param('inWorldOnly', inWorldOnly, 'boolean?');
    PAINTINGS.push({
      result: result,
      base: base,
      material: material,
      inWorldOnly: inWorldOnly ?? false,
    });
  },

  /**
   *
   * @param {RegistryTypes.ItemTag | string} tag
   * @param {TagGrouping | (RegistryTypes.Item[])} group
   */
  tagGroup: (tag, group) => {
    assert.param('tag', tag, 'string');
    if (Array.isArray(group)) {
      group = {
        items: group,
        recipesWhitelist: [],
      };
    }
    assert.param('group.items', group.items, 'string[]');
    assert.param('group.recipesWhitelist', group.recipesWhitelist, 'string[]');
    assert.param('group.primary', group.primary, 'string?');
    assert.param('group.noMoreClutter', group.noMoreClutter, 'boolean?');
    assert.param('group.noSelector', group.noSelector, 'boolean?');

    if (!group.recipesWhitelist) {
      group.recipesWhitelist = [];
    }
    TAG_GROUPINGS[tag] = group;
  },

  /**
   * Adds tag to an item
   * @param {RegistryTypes.ItemTag | string} tag
   * @param {RegExp | RegistryTypes.Item | (RegExp | RegistryTypes.Item)[]} items
   */
  addTag: (tag, items) => {
    if (!ADD_TAGS[tag]) ADD_TAGS[tag] = [];
    if (!Array.isArray(items)) {
      items = [items];
    }

    for (const item of items) {
      if (typeof item === 'string') {
        ADD_TAGS[tag].push(item);
      } else {
        Ingredient.of(item).itemIds.forEach((id) => {
          ADD_TAGS[tag].push(/** @type {RegistryTypes.Item} */ (String(id)));
        });
      }
    }
  },

  /**
   *
   * @param {RegistryTypes.Item} a
   * @param {RegistryTypes.Item} b
   * @param {Partial<Omit<ItemFlip, "a"|"b">>} [opts]
   */
  itemsFlip: (a, b, opts) => {
    opts = opts ?? {};
    ITEM_FLIPS.push({
      a: a,
      b: b,
      noMoreClutter: opts.noMoreClutter ?? false,
    });
  },

  /**
   * @param {RegistryTypes.Item} output
   */
  yeetRecipe: (output) => {
    assert.param('output', output, 'string');
    YEET_RECIPES.push({ output: output });
  },
  /**
   * @param {RecipeFilter} filter
   */
  yeetRecipeFilter: (filter) => {
    YEET_RECIPES.push(filter);
  },
  /**
   * @param {RegistryTypes.Item|RegistryTypes.Item[]} items
   */
  yeetItem: (items) => {
    if (!Array.isArray(items)) items = [items];
    for (const item of items) {
      assert.param('item', item, 'string');
      REG.yeetRecipe(item);
      YEET_TAGS_FROM.push(item);
      HIDE_ITEMS_FROM_VIEWER.push(item);
    }
  },
  /**
   *
   * @param {MachineryDef} def
   */
  machinery: (def) => {
    assert.param('def.machine', def.machine, 'string');
    assert.param('def.noInWorldCrafting', def.noInWorldCrafting, 'boolean?');
    assert.param('def.allowNormalCrafting', def.allowNormalCrafting, 'boolean?');
    MACHINERY.push(def);
  },

  /**
   *
   * @param {string} tag
   * @param {`${string}:${string}$color$${string}`} colorIds
   * @param {Partial<Omit<ColoringDef, "tag"|"coloredRegex">>} [opts]
   */
  coloring: (tag, colorIds, opts) => {
    let splits = colorIds.split('$color$');
    let regex = new RegExp('^' + splits[0] + '(' + COLOR_REGEX + ')' + splits[1] + '$');

    opts = opts ?? {};

    COLORINGS.push({
      tag: tag,
      coloredRegex: regex,
      uncolored: opts.uncolored ?? [],
      batchSize: opts.batchSize ?? 1,
      washingResult: opts.washingResult ?? 'white',
    });

    REG.addTag(tag, regex);
    if (opts.uncolored) {
      REG.addTag(tag, opts.uncolored);
    }
  },

  /**
   *
   * @param {RegistryTypes.ItemTag} tag
   * @param {RegistryTypes.Item} item
   * @param {boolean} [noMoreClutter]
   */
  chippedTag: (tag, item, noMoreClutter) => {
    ALL_CHIPPED_TAGS[tag] = item;
    REG.tagGroup(tag, {
      items: [],
      recipesWhitelist: [item],
      primary: item,
      noSelector: true,
      noMoreClutter: noMoreClutter ?? false,
    });
  },
};

/**
 * Extracts all items from the inggredient into a `target` array or a new array and returns it
 * @param {IngredientInfo} ingr
 * @param {RegistryTypes.Item[]} [target]
 * @return {RegistryTypes.Item[]}
 */
const itemIdsFor = (ingr, target) => {
  /**
   * @type {string[]}
   */
  let ids = target ?? [];
  Ingredient.of(ingr).itemIds.forEach((id) => {
    const sid = String(id);
    if (sid !== 'minecraft:barrier') ids.push(sid);
  });
  return /** @type {RegistryTypes.Item[]} */ (ids);
};
