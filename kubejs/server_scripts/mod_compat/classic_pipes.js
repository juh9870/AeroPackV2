// priority: 0

REG.itemsFlip('classicpipes:copper_pipe', 'classicpipes:inverted_copper_pipe');

REG.itemsFlip('classicpipes:advanced_copper_pipe', 'classicpipes:inverted_advanced_copper_pipe');

REG.itemsFlip('classicpipes:copper_fluid_pipe', 'classicpipes:inverted_copper_fluid_pipe');
REG.itemsFlip('classicpipes:advanced_copper_fluid_pipe', 'classicpipes:inverted_advanced_copper_fluid_pipe');

REG.yeetRecipe('classicpipes:copper_pipe');
REG.yeetRecipe('classicpipes:advanced_copper_pipe');
REG.yeetRecipe('classicpipes:copper_fluid_pipe');
REG.yeetRecipe('classicpipes:advanced_copper_fluid_pipe');
REG.yeetRecipe('classicpipes:inverted_copper_pipe');
REG.yeetRecipe('classicpipes:inverted_advanced_copper_pipe');
REG.yeetRecipe('classicpipes:inverted_copper_fluid_pipe');
REG.yeetRecipe('classicpipes:inverted_advanced_copper_fluid_pipe');

REG.tagGroup('kubejs:wooden_pipes', {
  items: [
    'classicpipes:oak_pipe',
    'classicpipes:spruce_pipe',
    'classicpipes:birch_pipe',
    'classicpipes:jungle_pipe',
    'classicpipes:acacia_pipe',
    'classicpipes:dark_oak_pipe',
    'classicpipes:mangrove_pipe',
    'classicpipes:cherry_pipe',
    'classicpipes:bamboo_pipe',
    'classicpipes:crimson_pipe',
    'classicpipes:warped_pipe',
  ],
  recipesWhitelist: [],
  noMoreClutter: false,
});
REG.tagGroup('kubejs:wooden_fluid_pipes', {
  items: [
    'classicpipes:oak_fluid_pipe',
    'classicpipes:spruce_fluid_pipe',
    'classicpipes:birch_fluid_pipe',
    'classicpipes:jungle_fluid_pipe',
    'classicpipes:acacia_fluid_pipe',
    'classicpipes:dark_oak_fluid_pipe',
    'classicpipes:mangrove_fluid_pipe',
    'classicpipes:cherry_fluid_pipe',
    'classicpipes:bamboo_fluid_pipe',
    'classicpipes:crimson_fluid_pipe',
    'classicpipes:warped_fluid_pipe',
  ],
  recipesWhitelist: [],
  noMoreClutter: false,
});

REG.tagGroup('kubejs:functional_pipes', [
  'classicpipes:iron_pipe',
  'classicpipes:lapis_pipe',
  'classicpipes:diamond_pipe',
  'classicpipes:brick_pipe',
  'classicpipes:nether_brick_pipe',
  'classicpipes:bone_pipe',
  'classicpipes:golden_pipe',
  'classicpipes:flint_pipe',
  'classicpipes:obsidian_pipe',
]);

REG.tagGroup('kubejs:functional_fluid_pipes', [
  'classicpipes:iron_fluid_pipe',
  'classicpipes:lapis_fluid_pipe',
  'classicpipes:diamond_fluid_pipe',
  'classicpipes:brick_fluid_pipe',
  'classicpipes:nether_brick_fluid_pipe',
  'classicpipes:obsidian_fluid_pipe',
]);

REG.tagGroup('kubejs:networked_pipes', [
  'classicpipes:routing_pipe',
  'classicpipes:provider_pipe',
  'classicpipes:request_pipe',
  'classicpipes:stocking_pipe',
  'classicpipes:matching_pipe',
  'classicpipes:storage_pipe',
  'classicpipes:recipe_pipe',
]);

Ingredient.of(/classicpipes:.+fluid_pipe/).itemIds.forEach((id) => {
  REG.encasing(
    /** @type {RegistryTypes.Item} */ (String(id)),
    /** @type {RegistryTypes.Item} */ (id.replace('_fluid', '')),
    'rubberworks:rubber_sheet',
  );
});

ServerEvents.recipes((event) => {
  event.shaped(Item.of('classicpipes:oak_pipe', 8), ['PGP'], {
    P: '#minecraft:planks',
    G: '#c:glass_blocks/cheap',
  });

  /**
   *
   * @param {RegistryTypes.Item} result
   * @param {IngredientInfo} outer
   * @param {IngredientInfo} inner
   */
  function circle(result, outer, inner) {
    event.shaped(Item.of(result, 8), ['PPP', 'PMP', 'PPP'], {
      P: outer,
      M: inner,
    });
  }

  circle('classicpipes:iron_pipe', '#kubejs:wooden_pipes', 'kubejs:andesite_machine');

  circle('classicpipes:iron_fluid_pipe', '#kubejs:wooden_fluid_pipes', 'kubejs:andesite_machine');

  circle('classicpipes:routing_pipe', '#kubejs:wooden_pipes', 'kubejs:logistics_machine');

  event.shapeless('classicpipes:copper_pipe', ['#kubejs:wooden_pipes', 'create:andesite_funnel']);
  event.shapeless('classicpipes:copper_fluid_pipe', ['#kubejs:wooden_fluid_pipes', 'create:andesite_funnel']);

  event.shapeless('classicpipes:advanced_copper_pipe', [
    ['#kubejs:wooden_pipes', 'classicpipes:copper_pipe'],
    'create:brass_funnel',
  ]);
  event.shapeless('classicpipes:advanced_copper_fluid_pipe', [
    ['#kubejs:wooden_fluid_pipes', 'classicpipes:copper_fluid_pipe'],
    'create:brass_funnel',
  ]);
});
