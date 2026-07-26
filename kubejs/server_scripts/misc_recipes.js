// priority: 0

const $ChainTexData = Java.loadClass('net.strangelyng.createchaincompat.datamaps.ChainTexData');

REG.addTag('c:ingots', [
  'morered:red_alloy_ingot',
  'createcasing:chorium_ingot',
  'create:shadow_steel',
  'create:refined_radiance',
  'create:chromatic_compound',
  'create:shadow_steel',
  'create:polished_rose_quartz',
]);

REG.addTag('c:nuggets', ['createsprings:spring_alloy_nugget']);
REG.addTag('c:plates', ['createsprings:spring_alloy_sheet', 'rubberworks:rubber_sheet']);
REG.addTag('c:music_discs', [
  'apothic_enchanting:music_disc_eterna',
  'apothic_enchanting:music_disc_quanta',
  'apothic_enchanting:music_disc_arcana',
  'apotheosis:music_disc_flash',
  'apotheosis:music_disc_glimmer',
  'apotheosis:music_disc_shimmer',
]);

REG.addTag('minecraft:rails', ['create:controller_rail']);
REG.addTag('createchaincompat:valid_for_chain_conveyor', [
  'simulated:rope_coupling',
  'create:belt_connector',
  'minecraft:lead',
]);

REG.addTag('kubejs:elytra', ['minecraft:elytra']);

REG.addTag('kubejs:smithing_template', [
  'create_dragons_plus:blaze_upgrade_smithing_template',
  'grapplemod:long_fall_boots_smithing_template',
  'l2complements:frost_upgrade_smithing_template',
  'l2complements:flame_upgrade_smithing_template',
  'grapplemod:base_upgrade',
  'kubejs:downgrade_template',
]);

REG.addTag('curios:head', ['aeronautics:aviators_goggles'])

ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: 'createvintageneoforged:iron_spring' },
    'createvintageneoforged:iron_spring',
    Ingredient.of('simulated:spring'),
  );

  event.replaceInput(
    {
      or: [{ output: 'createvintageneoforged:lathe' }, { output: 'createvintageneoforged:helve_hammer' }],
    },
    'create:andesite_casing',
    Ingredient.of('kubejs:andesite_machine'),
  );

  event.replaceInput({ output: 'create:crushing_wheel' }, '#c:stones', Ingredient.of('kubejs:andesite_machine'));
  event.replaceInput({ output: 'create:crushing_wheel' }, '#minecraft:planks', Ingredient.of('create:andesite_casing'));
  event.replaceInput(
    { output: 'create:crushing_wheel' },
    'create:andesite_alloy',
    Ingredient.of('minecraft:grindstone'),
  );

  event.recipes.create.mechanical_crafting(
    'create_simulated_thrusters:brass_thruster',
    ['CCHCC', 'GCPCG', ' STS ', ' STS ', ' STS '],
    {
      S: 'create:sturdy_sheet',
      T: 'create_simulated_thrusters:redstone_thruster',
      G: 'simulated:gimbal_sensor',
      C: 'create:brass_casing',
      P: 'kubejs:locomotion_machine',
      H: '#kubejs:shaft',
    },
  );

  event.remove({ output: 'linktablet:tablet' });
  event.recipes.create.mechanical_crafting('linktablet:tablet', ['RPB', 'LSA', 'TTT'], {
    P: 'create_optical:polarizing_filter',
    S: 'kubejs:sentient_machine',
    L: 'simulated:linked_typewriter',
    A: 'electroenergetics:accumulator',
    T: 'create:sturdy_sheet',
    R: '#kubejs:lightning_rod',
    B: '#kubejs:copper_button',
  });

  event.remove({ output: 'simulated:red_portable_engine' });
  event.shaped(Item.of('simulated:red_portable_engine', 2), ['PAP', 'SCB'], {
    P: 'createdieselgenerators:engine_piston',
    A: 'simulated:engine_assembly',
    C: 'kubejs:andesite_machine',
    B: 'minecraft:blast_furnace',
    S: 'createdieselgenerators:engine_silencer',
  });

  let potion = Fluid.of('create:potion', 250).set({
    'create:potion_fluid_bottle_type': 'regular',
    'minecraft:potion_contents': {
      potion: 'mutantmonsters:chemical_x',
    },
  });
  event.recipes.createvintageneoforged
    .centrifugation(
      [potion, Fluid.of('minecraft:water', 250)],
      [Ingredient.of('#minecraft:skulls'), Fluid.of('createdieselgenerators:crude_oil', 500)],
    )
    .superheated();

  event.remove({ output: 'reinforcedobsidian:reinforced_obsidian_block' });
  event.shaped(Item.of('reinforcedobsidian:reinforced_obsidian_block', 4), ['BOB', 'ONO', 'BOB'], {
    O: 'minecraft:obsidian',
    N: 'minecraft:nether_star',
    B: 'minecraft:iron_bars',
  });

  event.remove({ output: 'create:precision_mechanism' });
  event.shaped('create:precision_mechanism', ['tgt', 'gCg', 'tgt'], {
    t: 'gnkinetics:shaftless_tiny_brass_gear',
    g: 'gnkinetics:shaftless_brass_gear',
    C: 'minecraft:clock',
  });

  event.replaceInput({ input: 'create:shaft' }, 'create:shaft', '#kubejs:shaft');

  event.recipes.createvintageneoforged.coiling([Item.of('simulated:spring', 2)], ['create:iron_sheet']);

  event.recipes.create.sequenced_assembly(
    [Item.of('minecraft:arrow', 16)],
    Ingredient.of('#minecraft:logs'),
    [
      event.recipes.create.deploying(['minecraft:stick'], ['minecraft:stick', 'create:white_sail']),
      event.recipes.create.deploying(['minecraft:stick'], ['minecraft:stick', 'minecraft:flint']),
      event.recipes.create.cutting(['minecraft:stick'], ['minecraft:stick']),
    ],
    'minecraft:stick',
  );

  event.recipes.createvintageneoforged.turning(['minecraft:arrow'], [Ingredient.of('#kubejs:shaft')]);

  event.remove({ output: 'createsprings:unfinished_spring' });
  event.shaped('createsprings:unfinished_spring', ['P', 'S', 'P'], {
    P: 'createsprings:obsidian_plate',
    S: 'simulated:spring',
  });

  event.remove({ id: 'surfacesamples:crushing/redstone_shard' });
  event.remove({ id: 'surfacesamples:crushing/glowquartz_shard' });
  event.remove({ id: 'surfacesamples:redstone_from_shard' });
  event.recipes.create
    .crushing(
      [
        Item.of('surfacesamples:redstone_shard', 7),
        CreateItem.of(Item.of('surfacesamples:redstone_shard', 2), 0.5),
        CreateItem.of(Item.of('minecraft:redstone', 2), 0.5),
        CreateItem.of(Item.of('minecraft:redstone', 1), 0.5),
      ],
      ['surfacesamples:crystallised_redstone_block'],
    )
    .id('surfacesamples:crushing/redstone_shard');
  event.recipes.create
    .crushing(
      [
        Item.of('minecraft:quartz', 3),
        CreateItem.of(Item.of('minecraft:quartz', 2), 0.5),
        CreateItem.of(Item.of('minecraft:quartz', 2), 0.5),
        Item.of('minecraft:glowstone_dust', 3),
        CreateItem.of(Item.of('minecraft:glowstone_dust', 2), 0.5),
        CreateItem.of(Item.of('minecraft:glowstone_dust', 2), 0.5),
      ],
      ['surfacesamples:glowquartz_block'],
    )
    .id('surfacesamples:crushing/glowquartz_shard');
});

ServerEvents.generateData('after_mods', (event) => {
  const map = DataMap.of('item', 'createchaincompat:chain_tex_data').type();
  /**
   *
   * @param {RegistryTypes.Item} item
   * @param {string} texture
   */
  const chainTexture = (item, texture) => {
    const data = new $ChainTexData(texture);
    Ingredient.of(item).itemTypes.forEach((item) => {
      event.dataMap(map, (dataMap) => {
        /** @type {any} */ (dataMap).add(item, data);
      });
    });
  };

  chainTexture('simulated:rope_coupling', 'simulated:textures/block/rope_particle.png');
  chainTexture('create:belt_connector', 'create:textures/block/belt.png');
  chainTexture('minecraft:lead', 'createchaincompat:textures/block/rope_generic.png');
});
