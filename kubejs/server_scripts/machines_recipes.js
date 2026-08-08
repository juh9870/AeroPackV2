// priority: 0
ServerEvents.recipes((event) => {
  event.shaped('morered:hexidecrubrometer', ['PQP', 'PLP', 'PAP'], {
    P: 'morered:stone_plate',
    L: 'minecraft:redstone_lamp',
    Q: 'minecraft:quartz',
    A: 'create:analog_lever',
  });

  /**
   *
   * @param {RegistryTypes.Item} item
   * @param {object} catalyst
   * @returns
   */
  function seqFocusing(item, catalyst) {
    return event.custom({
      type: 'create_optical:focusing',
      ingredients: [
        {
          item: item,
        },
        catalyst,
      ],
      required_beam_type: 2,
      results: [
        {
          id: item,
        },
      ],
    });
  }

  event.recipes.create.sequenced_assembly(
    [CreateItem.of(Item.of('morered:hexidecrubrometer', 8))],
    'morered:stone_plate',
    [
      event.recipes.create.deploying(['morered:stone_plate'], ['morered:stone_plate', 'create:polished_rose_quartz']),
      seqFocusing('morered:stone_plate', { tag: 'c:dyes/red' }),
      seqFocusing('morered:stone_plate', { tag: 'c:dyes/green' }),
      seqFocusing('morered:stone_plate', { tag: 'c:dyes/blue' }),
      event.recipes.create.deploying(['morered:stone_plate'], ['morered:stone_plate', 'morered:stone_plate']),
      event.recipes.create.pressing(['morered:stone_plate'], ['morered:stone_plate']),
    ],
    'morered:stone_plate',
    8,
  );

  event.shaped('kubejs:andesite_machine', ['gSg', 'GCG', 'gPg'], {
    G: 'create:large_cogwheel',
    g: 'create:cogwheel',
    C: 'create:andesite_casing',
    S: '#kubejs:shaft',
    P: 'simulated:spring',
  });

  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:andesite_machine', 2)],
    'create:gearbox',
    [
      event.recipes.create.cutting(['create:andesite_casing'], ['create:andesite_casing']).processingTime(50),
      event.recipes.create.deploying(['create:andesite_casing'], ['create:andesite_casing', 'create:cogwheel']),
      event.recipes.create.deploying(['create:andesite_casing'], ['create:andesite_casing', 'create:large_cogwheel']),
      event.recipes.create.deploying(['create:andesite_casing'], ['create:andesite_casing', 'minecraft:chain']),
      event.recipes.create.pressing(['create:andesite_casing'], ['create:andesite_casing']),
    ],
    'create:andesite_casing',
    1,
  );

  event.shaped('kubejs:brass_machine', ['gTg', 'GCG', 'gMg'], {
    M: 'create:precision_mechanism',
    C: 'create:brass_casing',
    G: 'gnkinetics:large_brass_gear',
    g: 'gnkinetics:brass_gear',
    T: 'create:electron_tube',
  });

  event.custom({
    type: 'createsprings:welding',
    ingredients: [
      {
        item: 'create:brass_casing',
      },
      {
        item: 'create:rose_quartz_lamp',
      },
    ],
    speed: 'fast',
    results: [
      {
        id: 'kubejs:brass_machine',
        count: 2,
      },
    ],
  });

  event.shaped('kubejs:copper_machine', ['  P', 'GCP', 'RRP'], {
    P: 'create:fluid_pipe',
    C: 'create:copper_casing',
    G: 'create_submarine:copper_pressurizer',
    R: 'rubberworks:rubber',
  });

  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:copper_machine', 2)],
    'create:copper_casing',
    [
      event.recipes.create.filling(
        ['create:copper_casing'],
        ['create:copper_casing', Fluid.of('rubberworks:resin', 250)],
      ),
      event.recipes.create.deploying(['create:copper_casing'], ['create:copper_casing', 'minecraft:glass']),
      event.recipes.create.deploying(['create:copper_casing'], ['create:copper_casing', 'create:fluid_pipe']),
      event.recipes.create.pressing(['create:copper_casing'], ['create:copper_casing']),
    ],
    'create:copper_casing',
    1,
  );

  event.shaped(Item.of('kubejs:locomotion_machine', 2), ['S  ', 'BCQ', 'TGG'], {
    S: 'create:red_seat',
    T: 'create:track',
    C: 'create:railway_casing',
    Q: 'create:contraption_controls',
    G: 'compactgearbox:gearbox_controller',
    B: 'create:metal_bracket',
  });

  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:locomotion_machine', 2)],
    'create:railway_casing',
    [
      event.recipes.create.filling(
        ['create:railway_casing'],
        ['create:railway_casing', Fluid.of('minecraft:lava', 500)],
      ),
      event.recipes.create.deploying(['create:railway_casing'], ['create:railway_casing', 'create:track']),
      event.recipes.create.filling(
        ['create:railway_casing'],
        ['create:railway_casing', Fluid.of('minecraft:water', 500)],
      ),
      event.recipes.create.pressing(['create:railway_casing'], ['create:railway_casing']),
      event.recipes.create.deploying(['create:railway_casing'], ['create:railway_casing', 'create:red_seat']),
      event.recipes.create.pressing(['create:railway_casing'], ['create:railway_casing']),
    ],
    'create:railway_casing',
    1,
  );

  event.shaped(Item.of('kubejs:logistics_machine', 2), ['TL ', 'JVB', 'NCB'], {
    T: 'minecraft:tripwire_hook',
    L: 'bits_n_bobs:lightbulb',
    N: 'minecraft:note_block',
    J: 'minecraft:jukebox',
    B: 'minecraft:book',
    C: 'create:bound_cardboard_block',
    V: 'create:item_vault',
  });

  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:logistics_machine', 2)],
    'create:item_vault',
    [
      event.recipes.create.deploying(['create:item_vault'], ['create:item_vault', 'minecraft:note_block']),
      event.recipes.create.cutting(['create:item_vault'], ['create:item_vault']).processingTime(50),
      event.recipes.create.deploying(['create:item_vault'], ['create:item_vault', 'minecraft:book']),
      event.recipes.create.deploying(['create:item_vault'], ['create:item_vault', 'create:cardboard_block']),
      event.recipes.create.deploying(['create:item_vault'], ['create:item_vault', 'minecraft:lead']),
      event.recipes.create.pressing(['create:item_vault'], ['create:item_vault']),
    ],
    'create:item_vault',
    1,
  );

  event.shaped('kubejs:sentient_machine', ['CCC', 'CPC', 'TVT'], {
    C: 'create:cardboard',
    P: 'create_connected:control_chip',
    T: 'create:turntable',
    V: 'create:item_vault',
  });

  event.recipes.create.mixing(
    [Item.of('kubejs:sentient_machine', 2), CreateItem.of('kubejs:sentient_machine', 0.5)],
    [
      Fluid.of('minecraft:water', 1000),
      'create:electron_tube',
      'create:super_glue',
      Item.of('kubejs:sentient_machine', 2),
    ],
  );

  event.shaped('kubejs:optical_machine', ['CSC', 'OPO', 'TVT'], {
    C: 'create:cardboard',
    S: 'create_optical:polarizing_filter',
    P: 'create:goggles',
    T: 'create:turntable',
    O: 'create_optical:optical_device',
    V: 'create:item_vault',
  });

  // Component recipes
  event.recipes.createvintageneoforged.turning(['kubejs:drill_head'], ['minecraft:iron_block']);
});

ServerEvents.generateData('after_mods', (event) => {
  event.json(
    'kubejs:shape_map/modpack_cluttercompat',
    /** @type {any} */ ({
      priority: 502,
      add: {
        '/create:(?<color>.+)_seat/': [
          'createadditionallogistics:${color}_short_seat',
          'createadditionallogistics:${color}_tall_seat',
        ],
      },
    }),
  );
});
