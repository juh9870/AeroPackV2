// priority: 0

ServerEvents.tags('item', (event) => {
  for (const tag in COGS) {
    let cog = COGS[tag];
    for (const item of cog.allCogs) {
      event.add(/** @type {RegistryTypes.ItemTag} */ (tag), item);
      if (cog.allCogs.length > 1) {
        event.add('l2itemselector:selectable', item);
      }
    }
  }
  for (const tag in ADD_TAGS) {
    let g = ADD_TAGS[tag];
    for (const item of g) {
      event.add(/** @type {RegistryTypes.ItemTag} */ (tag), item);
    }
  }
  for (const tag in TAG_GROUPINGS) {
    let g = TAG_GROUPINGS[tag];
    for (const item of g.items) {
      event.add(/** @type {RegistryTypes.ItemTag} */ (tag), item);
      if (!g.noMoreClutter && !g.noSelector && g.items.length > 1) {
        event.add('l2itemselector:selectable', item);
      }
    }
  }
  for (const flip of ITEM_FLIPS) {
    event.add('l2itemselector:selectable', flip.b);
    event.add('l2itemselector:selectable', flip.a);
  }

  for (const item of YEET_TAGS_FROM) {
    event.removeAllTagsFrom(item);
  }
});

ServerEvents.recipes((event) => {
  const hammer = 'createdieselgenerators:hammer';
  const pickaxes = '#minecraft:pickaxes';
  const axes = '#minecraft:axes';

  event.remove({ type: 'createvintageneoforged:polishing' });
  event.remove({ id: 'createvintageneoforged:curving/diamond' });

  for (const recipe of YEET_RECIPES) {
    event.remove(recipe);
  }

  /**
   * @param {RegistryTypes.Item} result
   * @param {RegistryTypes.Item} base
   * @param {IngredientInfo} paint
   */
  function simplePainting(result, base, paint) {
    event.recipes.create
      .item_application([CreateItem.of(result)], [Ingredient.of(base), Ingredient.of(paint)])
      .keepHeldItem();
  }

  /**
   *
   * @param {RegistryTypes.Item} result
   * @param {RegistryTypes.Item} base
   * @param {IngredientInfo} material
   * @param {boolean} [inWorldOnly]
   * @param {RegistryTypes.Item} [stripDrop]
   */
  function encasing(result, base, material, inWorldOnly, stripDrop) {
    stripDrop = /** @type{RegistryTypes.Item} */ (stripDrop ?? material);
    event.recipes.create.item_application([CreateItem.of(result)], [Ingredient.of(base), Ingredient.of(material)]);
    event.recipes.create
      .item_application([CreateItem.of(base), CreateItem.of(stripDrop)], [Ingredient.of(result), Ingredient.of(axes)])
      .keepHeldItem();

    if (!inWorldOnly) {
      event.shapeless(Item.of(result), [Ingredient.of(base), Ingredient.of(material)]);
      event.recipes.createvintageneoforged.vibrating(
        [CreateItem.of(base), CreateItem.of(stripDrop)],
        [Ingredient.of(result)],
      );
    }
  }

  /**
   *
   * @param {RegistryTypes.Item} result
   * @param {RegistryTypes.Item} base
   * @param {IngredientInfo} material
   * @param {boolean} [inWorldOnly]
   */
  function painting(result, base, material, inWorldOnly) {
    event.recipes.create
      .item_application([CreateItem.of(result)], [Ingredient.of(base), Ingredient.of(material)])
      .keepHeldItem();
    event.recipes.create
      .item_application([CreateItem.of(base)], [Ingredient.of(result), Ingredient.of(axes)])
      .keepHeldItem();

    if (!inWorldOnly) {
      event.recipes.createvintageneoforged.vibrating([CreateItem.of(base)], [Ingredient.of(result)]);
    }
  }

  /**
   *
   * @param {RegistryTypes.ItemTag} tag
   * @param {RegistryTypes.Item[]} items
   */
  function tagGrouping(tag, items) {
    if (items.length > 1) {
      event.custom({
        type: 'chipped:workbench',
        ingredients: [{ tag: tag }],
      });
    }

    if (items.length > 2) {
      for (const item of items) {
        event.stonecutting(Item.of(item), Ingredient.of(/** @type {`#${RegistryTypes.ItemTag}`} */ ('#' + tag)));
      }
    } else if (items.length === 2) {
      event.stonecutting(Item.of(items[0]), Ingredient.of(items[1]));
      event.stonecutting(Item.of(items[1]), Ingredient.of(items[0]));
    }
  }

  // primitive groupings

  for (const tag in TAG_GROUPINGS) {
    let group = TAG_GROUPINGS[tag];

    /**
     * @type {RegistryTypes.Item[]}
     */
    let items = [];
    for (const item of Ingredient.of(/** @type {RegistryTypes.ItemTag} */ ('#' + tag)).itemIds.toArray()) {
      items.push(/** @type {RegistryTypes.Item}*/ (String(item)));
    }

    for (const item of items) {
      if (group.recipesWhitelist.indexOf(item) < 0) {
        event.remove({ output: item });
      }
    }

    if (!group.noMoreClutter) tagGrouping(/** @type {RegistryTypes.ItemTag} */ (tag), items);
  }

  for (const encase of ENCASINGS) {
    event.remove({ output: encase.result });
    encasing(encase.result, encase.base, encase.material, encase.inWorldOnly);
  }

  for (const paint of PAINTINGS) {
    event.remove({ output: paint.result });
    painting(paint.result, paint.base, paint.material, paint.inWorldOnly);
  }

  for (const tag in COGS) {
    let cog = COGS[tag];
    for (const item of cog.allCogs)
      event.remove({
        output: item,
        not: { type: 'create:sequenced_assembly' },
      });

    if (cog.material) {
      if (!cog.parent) {
        throw new Error('Cog definition for `' + tag + '` define material but not parent');
      }

      let parentCog = COGS[cog.parent];

      if (!parentCog) {
        throw new Error(
          'Cog definition for `' + tag + '` references parent `' + cog.parent + "` cog which doesn't exist",
        );
      }

      let fn = cog.consumeMaterial ? encasing : painting;
      fn(cog.base, parentCog.base, cog.material, false);
      if (cog.shaftless && parentCog.shaftless) {
        fn(cog.shaftless, parentCog.shaftless, cog.material, false);
      }
      if (cog.hollow && parentCog.hollow) {
        fn(cog.hollow, parentCog.hollow, cog.material, false);
      }
    }

    if (cog.shaftless) {
      event.remove({ output: cog.shaftless });
      event.recipes.create
        .item_application([CreateItem.of(cog.shaftless)], [Ingredient.of(cog.base), Ingredient.of(hammer)])
        .keepHeldItem();
      event.recipes.create
        .item_application([CreateItem.of(cog.base)], [Ingredient.of(cog.shaftless), Ingredient.of(hammer)])
        .keepHeldItem();
    }
    if (cog.hollow) {
      event.recipes.create
        .item_application(
          [CreateItem.of(cog.hollow)],
          [Ingredient.of(cog.shaftless || cog.base), Ingredient.of(pickaxes)],
        )
        .keepHeldItem();

      // event.custom({
      // 	type: "lychee:block_interacting",
      // 	item_in: pickaxes,
      // 	block_in: cog.hollow + "[has_shaft=false]",
      // 	post: ["place " + (cog.shaftless || cog.base), "prevent_default"],
      // });
    }
  }

  // base cog recipes
  event.shapeless('create:cogwheel', ['#kubejs:shaft', '#minecraft:planks']);
  event.shapeless('create:large_cogwheel', ['#kubejs:shaft', '#minecraft:planks', '#minecraft:planks']);
  event.shapeless('create:large_cogwheel', ['create:cogwheel', '#minecraft:planks']);

  event.stonecutting(Item.of('gnkinetics:tiny_cogwheel', 4), '#kubejs:cog/wooden');
  event.stonecutting(Item.of('gnkinetics:shaftless_tiny_cogwheel', 4), '#kubejs:cog/wooden');
  event.shapeless('create:cogwheel', [
    '#kubejs:tiny_cog/wooden',
    '#kubejs:tiny_cog/wooden',
    '#kubejs:tiny_cog/wooden',
    '#kubejs:tiny_cog/wooden',
  ]);

  // lazy shafting
  simplePainting('create:cogwheel', 'createadditionallogistics:lazy_cogwheel', 'create:shaft');
  simplePainting('createadditionallogistics:lazy_cogwheel', 'create:cogwheel', 'createadditionallogistics:lazy_shaft');
  simplePainting('create:large_cogwheel', 'createadditionallogistics:lazy_large_cogwheel', 'create:shaft');
  simplePainting(
    'createadditionallogistics:lazy_large_cogwheel',
    'create:large_cogwheel',
    'createadditionallogistics:lazy_shaft',
  );
  simplePainting('create:shaft', 'createadditionallogistics:lazy_shaft', 'create:shaft');
  simplePainting('createadditionallogistics:lazy_shaft', 'create:shaft', 'createadditionallogistics:lazy_shaft');

  // Machinery
  for (const set of MACHINERY) {
    for (const sawResult of set.sawing) {
      if (sawResult.length !== 2 || typeof sawResult[1] !== 'number') {
        throw new Error('Bad sawing entry for machine ' + set.machine);
      }

      event.remove({ output: sawResult[0] });
      event.stonecutting(Item.of(sawResult[0], sawResult[1]), Ingredient.of(set.machine));

      // recycling
      event.recipes.create.crushing([CreateItem.of(set.machine, 1 / sawResult[1] / 2)], [Ingredient.of(sawResult[0])]);
    }

    for (const apply of set.applying) {
      event.remove({ output: apply[0] });

      if (apply.length !== 3 || typeof apply[1] !== 'number') {
        throw new Error('Bad applying entry for machine ' + set.machine);
      }

      if (set.noInWorldCrafting) {
        event.recipes.create.deploying(
          [CreateItem.of(Item.of(apply[0], apply[1]))],
          [Ingredient.of(set.machine), Ingredient.of(apply[2])],
        );
      } else {
        let output = [CreateItem.of(apply[0])];
        if (apply[1] > 1) {
          output.push(CreateItem.of(Item.of(apply[0], apply[1] - 1)));
        }
        event.recipes.create.item_application(output, [Ingredient.of(set.machine), Ingredient.of(apply[2])]);
      }

      if (set.allowNormalCrafting) {
        event.shapeless(Item.of(apply[0], apply[1]), [set.machine, apply[2]]);
      }

      // recycling
      event.recipes.create.crushing(
        [CreateItem.of(set.machine, 1 / apply[1] / 2), CreateItem.of(apply[2], 1 / apply[1] / 2)],
        [Ingredient.of(apply[0])],
      );
    }
  }

  for (const coloring of COLORINGS) {
    /**
     * @type {Record<string, RegistryTypes.Item>}
     */
    let colored_map = {};
    for (const id of itemIdsFor(coloring.coloredRegex)) {
      let parsed = /** @type {string[]} */ (coloring.coloredRegex.exec(id));
      colored_map[parsed[1]] = id;
    }

    let baseTag = /** @type {IngredientInfo} */ ('#' + coloring.tag);

    for (const color in colored_map) {
      let item = colored_map[color];

      let dyeItem = /** @type {RegistryTypes.Item} */ ('minecraft:' + color + '_dye');

      if (coloring.batchSize !== 8) {
        /**
         * @type {IngredientInfo[]}
         */
        let ingredients = [];
        for (let i = 0; i < coloring.batchSize; i++) {
          ingredients.push(baseTag);
        }

        ingredients.push(dyeItem);

        event.shapeless(Item.of(item, coloring.batchSize), ingredients);
      } else {
        event.shaped(Item.of(item, coloring.batchSize), ['BBB', 'BDB', 'BBB'], {
          B: baseTag,
          D: dyeItem,
        });
      }
      if (coloring.batchSize !== 1 && coloring.batchSize !== 8) {
        event.custom({
          type: 'create_dragons_plus:coloring',
          color: color,
          ingredients: [
            {
              tag: coloring.tag,
            },
          ],
          results: [
            {
              id: item,
            },
          ],
        });
      }
      if (coloring.batchSize !== 1) {
        event.custom({
          type: 'create_optical:focusing',
          ingredients: [
            {
              tag: coloring.tag,
            },
            {
              tag: 'c:dyes/' + color,
            },
          ],
          required_beam_type: 2,
          results: [
            {
              id: item,
            },
          ],
        });
      }
    }

    let washingResult = /** @type {RegistryTypes.Item | "-"} */ (
      colored_map[coloring.washingResult] ?? coloring.washingResult
    );
    if (washingResult && washingResult !== '-') {
      event.recipes.create.splashing([CreateItem.of(washingResult)], [Ingredient.of(baseTag)]);
    }
  }

  // flips
  for (const flip of ITEM_FLIPS) {
    if (!flip.noMoreClutter) {
      event.stonecutting(Item.of(flip.a), [Ingredient.of(flip.b)]);
      event.stonecutting(Item.of(flip.b), [Ingredient.of(flip.a)]);
    }
    event.recipes.create
      .item_application([CreateItem.of(flip.a)], [Ingredient.of(flip.b), Ingredient.of(hammer)])
      .keepHeldItem();
    event.recipes.create
      .item_application([CreateItem.of(flip.b)], [Ingredient.of(flip.a), Ingredient.of(hammer)])
      .keepHeldItem();
  }
});

ServerEvents.generateData('after_mods', (event) => {
  /**
   * @type {Record<string, string[]>}
   */
  const entries = {};
  /**
   * @type {Record<string, string[]>}
   */
  const clutterEntries = {};

  for (const tag in TAG_GROUPINGS) {
    let g = TAG_GROUPINGS[tag];
    if (!g.noMoreClutter && !g.noSelector && g.items.length > 1) {
      entries[tag] = g.items;
    }
    if (g.noMoreClutter) {
      clutterEntries[g.primary ?? g.items[0]] = g.items;
    }
  }

  for (let i = 0; i < ITEM_FLIPS.length; i++) {
    let flip = ITEM_FLIPS[i];
    if (flip.noMoreClutter) {
      clutterEntries[flip.a] = [flip.b];
    } else {
      entries['kubejs:flip_' + i] = [flip.a, flip.b];
    }
  }

  event.json(
    'kubejs:l2itemselector_config/item_selector/modpack',
    /** @type {any} */ ({
      map: entries,
    }),
  );

  event.json(
    'kubejs:shape_map/modpack_cluttercompat_remove',
    /** @type {any} */ ({
      priority: 502,
      remove: {
        'create:gearbox': ['create:gearbox', 'create:vertical_gearbox'],
      },
    }),
  );

  clutterEntries['create:linear_chassis'] = ['create:secondary_linear_chassis', 'create:radial_chassis'];
  event.json(
    'kubejs:shape_map/modpack_cluttercompat_add',
    /** @type {any} */ ({
      priority: 502,
      add: clutterEntries,
    }),
  );
});

RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
  for (const item of HIDE_ITEMS_FROM_VIEWER) {
    event.remove(item);
  }
});
