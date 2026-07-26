// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  /**
   * @param {string} tag
   * @param {EmiGroupEntry[]} [extras]
   */
  function chipped(tag, extras) {
    if (!extras) {
      EMI._add(event, 'kubejs', tag, 'tag', 'chipped:' + tag);
    } else {
      EMI.add(event, 'kubejs', tag, [/** @type {`#${RegistryTypes.ItemTag}`} */ ('#chipped:' + tag), extras]);
    }
  }

  /**
   * @param {string} name
   * @param {string[]} tags
   */
  function chippeds(name, tags) {
    EMI.add(
      event,
      'kubejs',
      name,
      tags.map((e) => /** @type {`#${RegistryTypes.ItemTag}`} */ ('#chipped:' + e)),
    );
  }
  EMI.add(event, 'kubejs', 'coralstone', [/upgrade_aquatic:.*coralstone.*/]);
  EMI.add(event, 'c', 'glass_blocks', [
    '#c:glass_blocks',
    '#c:glass',
    '#chipped:glass',
    /chipped:.+_stained_glass(_pillar)?$/,
    [
      'create:oak_window',
      'create:spruce_window',
      'create:birch_window',
      'create:jungle_window',
      'create:acacia_window',
      'create:dark_oak_window',
      'create:mangrove_window',
      'create:crimson_window',
      'create:warped_window',
      'create:cherry_window',
      'create:bamboo_window',
      'create:ornate_iron_window',
    ],
  ]);

  EMI.add(event, 'c', 'glass_panes', [
    '#c:glass_panes',
    '#chipped:glass_pane',
    /chipped:.+_stained_glass_pane(_pillar)?$/,
  ]);

  EMI.add(event, 'kubejs', 'travertine', [/^atmospheric:.*travertine.*$/]);

  chipped('cobblestone');
  chipped('mossy_cobblestone');
  chipped('stone');
  chipped('smooth_stone');
  chipped('mossy_stone_bricks');
  chipped('sandstone');
  chipped('red_sandstone');

  EMI.add(event, 'kubejs', 'deepslate', [
    ['minecraft:cobbled_deepslate', 'minecraft:reinforced_deepslate'],
    '#chipped:deepslate',
  ]);
  chipped('blackstone');
  chipped('gilded_blackstone');
  chipped('granite');
  chipped('andesite');
  chipped('diorite');
  chipped('tuff');
  chipped('dirt');
  chippeds('bricks', ['bricks', 'borderless_bricks']);
  chipped('coal_block');
  chipped('obsidian');
  chipped('crying_obsidian');
  chipped('lodestone');
  chipped('lapis_block');
  chipped('diamond_block');
  chipped('emerald_block');
  chipped('gold_block');
  chipped('iron_block');
  chipped('raw_gold_block');
  chipped('raw_iron_block');
  chipped('raw_copper_block');
  chipped('netherite_block');
  chipped('sponge', ['minecraft:wet_sponge']);
  chipped('glowstone');
  chipped('blue_ice');
  chipped('packed_ice');
  chipped('ice');
  chipped('snow_block');
  chipped('clay');
  chipped('mud');
  chipped('mangrove_roots', ['minecraft:muddy_mangrove_roots']);
  chipped('bone_block');
  chippeds('mushroom_block', ['brown_mushroom_block', 'red_mushroom_block', 'mushroom_stem']);
  chipped('brown_mushroom');
  chipped('red_mushroom');
  chipped('cobweb', ['atmospheric:grimweb']);
  chipped('gravel');
  chipped('hay_block');
  chipped('moss_block', ['minecraft:moss_carpet', 'minecraft:pale_moss_block', 'minecraft:pale_moss_carpet']);
  chipped('melon');
  chipped('shroomlight');
  chipped('sand', ['minecraft:red_sand', 'atmospheric:arid_sand', 'atmospheric:red_arid_sand']);
  chipped('soul_sand', ['minecraft:soul_soil']);
  chippeds('froglight', ['ochre_froglight', 'pearlescent_froglight', 'verdant_froglight']);
  chipped('crimson_roots');
  chipped('warped_roots');
  EMI.add(event, 'minecraft', 'copper_block', [
    '#kubejs:copper_bulbs',
    '#chipped:waxed_copper_block',
    '#chipped:waxed_exposed_copper_block',
    '#chipped:waxed_weathered_copper',
    '#chipped:waxed_oxidized_copper',
    '#chipped:copper_block',
    '#chipped:exposed_copper_block',
    '#chipped:weathered_copper',
    '#chipped:oxidized_copper',
  ]);
  EMI.add(event, 'kubejs', 'copper_chest', ['#kubejs:copper_chests']);
  EMI.add(event, 'kubejs', 'copper_golem', ['#kubejs:copper_golems']);
  EMI.add(event, 'kubejs', 'lightning_rod', ['#kubejs:lightning_rod']);
  EMI.add(event, 'kubejs', 'bars', [
    '#chipped:iron_bars',
    ['create:andesite_bars', 'create:brass_bars', 'create:copper_bars'],
    '#kubejs:copper_bars',
  ]);
  chipped('lantern', ['#chipped:soul_lantern', '#kubejs:copper_lantern', 'upgrade_aquatic:tooth_lantern']);
  EMI.add(event, 'kubejs', 'wooden_shelf', [/^(minecraft|everycomp):.+_shelf$/]);
  chipped('bookshelf', ['minecraft:chiseled_bookshelf']);
  chipped('lily_pad');
  chipped('nether_sprouts');
  chipped('nether_wart_block');
  chipped('pumpkin', [
    '#chipped:carved_pumpkin',
    '#chipped:jack_o_lantern',
    [
      'autumnity:carved_large_pumpkin_slice',
      'autumnity:large_jack_o_lantern_slice',
      'autumnity:large_pumpkin_slice',
      'autumnity:large_redstone_jack_o_lantern_slice',
      'autumnity:large_soul_jack_o_lantern_slice',
      'autumnity:redstone_jack_o_lantern',
      'autumnity:soul_jack_o_lantern',
    ],
  ]);
  chipped('warped_wart_block');
  chipped('crimson_fungus');
  chipped('warped_fungus');

  EMI.add(event, 'minecraft', 'logs', [
    '#minecraft:logs',
    /^chipped:.+_(log|stem)$/,
    /^everycomp:ch\/.+_(log|stem)$/,
    'createdieselgenerators:chip_wood_beam',
  ]);
  chipped('barrel');
  chipped('ladder', [
    'copycats:copycat_ladder',
    'create:andesite_ladder',
    'create:brass_ladder',
    'create:copper_ladder',
  ]);
  chipped('torch');
  chipped('ancient_debris');
  chipped('calcite');
  chipped('dark_prismarine');
  chipped('prismarine', ['upgrade_aquatic:luminous_prismarine', 'upgrade_aquatic:prismarine_rod_bundle']);
  chipped('end_stone');
  chipped('magma_block');
  chipped('magma_block');
  chipped('nether_bricks');
  chipped('red_nether_bricks');
  chipped('purpur_block');
  chipped('quartz_block');
  EMI.add(event, 'c', 'glazed_terracottas', ['#c:glazed_terracottas', /^chipped:.*glazed_terracotta.*$/]);
  EMI.add(event, 'minecraft', 'terracotta', ['#minecraft:terracotta', /^chipped:.*terracotta.*$/]);
  EMI.add(event, 'c', 'concretes', ['#c:concretes', /^chipped:.*concrete.*$/]);
  chipped('mud_bricks');
  chipped('sea_lantern');
  chipped('redstone_lamp');
  chipped('redstone_block');
  chipped('redstone_torch');
  EMI.add(event, 'c', 'chain', [['minecraft:chain'], '#kubejs:copper_chains']);
  EMI.add(event, 'kubejs', 'resin', ['#kubejs:resin_bricks', 'minecraft:resin_block']);
  EMI.add(event, 'kubejs', 'thatch', ['#kubejs:thatch']);
  EMI.add(event, 'kubejs', 'cinnabar', ['#kubejs:cinnabar']);
  EMI.add(event, 'kubejs', 'sulfur', ['#kubejs:sulfur']);
  EMI.add(event, 'kubejs', 'carmine', ['#kubejs:carmine']);
  EMI.add(event, 'kubejs', 'snail_shell', ['#kubejs:snail_shell']);
  EMI.add(event, 'kubejs', 'cinnabar', ['#kubejs:cinnabar']);
  EMI.add(event, 'kubejs', 'scute_block', ['#kubejs:scute_block']);
  EMI.add(event, 'kubejs', 'tooth_block', ['#kubejs:tooth_block']);
  EMI.add(event, 'kubejs', 'grasses_and_soils', [
    [
      'minecraft:grass_block',
      'minecraft:podzol',
      'environmental:podzol_path',
      'minecraft:mycelium',
      'environmental:mycelium_path',
      'atmospheric:crustose',
      'atmospheric:crustose_path',
      'environmental:buried_truffle',
      'minecraft:dirt_path',
      'minecraft:farmland',
    ],
  ]);
  chipped('netherrack', ['minecraft:crimson_nylium', 'minecraft:warped_nylium']);
  chipped('basalt', ['minecraft:smooth_basalt']);
  chipped('packed_mud', ['environmental:smooth_mud']);
  EMI.add(event, 'kubejs', 'kelp_block', ['upgrade_aquatic:kelp_block', '#chipped:dried_kelp_block']);
  EMI.add(event, 'minecraft', 'pressure_plates', [
    '#minecraft:wooden_pressure_plates',
    [
      'minecraft:stone_pressure_plate',
      'minecraft:polished_blackstone_pressure_plate',
      'minecraft:heavy_weighted_pressure_plate',
      'minecraft:light_weighted_pressure_plate',
      'copycats:copycat_wooden_pressure_plate',
      'copycats:copycat_stone_pressure_plate',
      'copycats:copycat_light_weighted_pressure_plate',
      'copycats:copycat_heavy_weighted_pressure_plate',
    ],
  ]);
  EMI.add(event, 'kubejs', 'amethyst', [
    [
      'minecraft:budding_amethyst',
      'minecraft:small_amethyst_bud',
      'minecraft:medium_amethyst_bud',
      'minecraft:large_amethyst_bud',
      'minecraft:amethyst_cluster',
    ],
    '#chipped:amethyst_block',
  ]);
  EMI.add(event, 'c', 'small_plants', [
    [
      'minecraft:short_grass',
      'minecraft:fern',
      'minecraft:short_dry_grass',
      'minecraft:bush',
      'environmental:mycelium_sprouts',
      'environmental:dwarf_spruce',
      'atmospheric:agave',
      'atmospheric:golden_growths',
      'atmospheric:arid_sprouts',
      'upgrade_aquatic:beachgrass',
      'minecraft:dead_bush',
      'minecraft:leaf_litter',
      'minecraft:firefly_bush',
      'environmental:hanging_willow_leaves',
      'environmental:pink_hanging_wisteria_leaves',
      'environmental:purple_hanging_wisteria_leaves',
      'environmental:blue_hanging_wisteria_leaves',
      'environmental:white_hanging_wisteria_leaves',
      'minecraft:pale_hanging_moss',
      'minecraft:hanging_roots',
      'atmospheric:hanging_currant',
      'minecraft:tall_grass',
      'environmental:giant_tall_grass',
      'minecraft:large_fern',
      'minecraft:tall_dry_grass',
      'upgrade_aquatic:tall_beachgrass',
      'autumnity:maple_leaf_pile',
      'autumnity:yellow_maple_leaf_pile',
      'autumnity:orange_maple_leaf_pile',
      'autumnity:red_maple_leaf_pile',
    ],
  ]);
  EMI.add(event, 'kubejs', 'coral_block', [/^(minecraft|upgrade_aquatic):.*coral_block$/]);
  chipped('vine', ['atmospheric:passion_vine', 'minecraft:weeping_vines', 'minecraft:twisting_vines']);
  EMI.add(event, 'kubejs', 'coral', [/^(minecraft|upgrade_aquatic):.*coral(_fan|_shower)?$/]);
  EMI.add(event, 'kubejs', 'bamboo_block', [
    ['minecraft:bamboo_block', 'minecraft:stripped_bamboo_block', 'minecraft:bamboo_mosaic'],
  ]);
  chipped('pointed_dripstone', ['minecraft:sulfur_spike']);
  chipped('dripstone_block');
  EMI.add(event, 'minecraft', 'buttons', [
    '#minecraft:buttons',
    '#kubejs:copper_button',
    'redstonepen:basic_button',
    'redstonepen:basic_pulse_button',
  ]);
  EMI.add(event, 'minecraft', 'levers', [
    'minecraft:lever',
    'simulated:throttle_lever',
    'redstonepen:basic_lever',
    'create:analog_lever',
    'aeroworks:joystick',
    'simulated:steering_wheel',
  ]);
  EMI.add(event, 'minecraft', 'harness', ['#minecraft:harnesses']);
  EMI.add(event, 'c', 'buckets', ['#c:buckets', /^.+:.+_bucket$/]);
  EMI.add(event, 'kubejs', 'eggs', [
    'minecraft:egg',
    'minecraft:dragon_egg',
    'minecraft:turtle_egg',
    'minecraft:sniffer_egg',
    'minecraft:brown_egg',
    'minecraft:blue_egg',
    'environmental:duck_egg',
    'autumnity:turkey_egg',
  ]);
  EMI.add(event, 'kubejs', 'ore_samples', [
    'surfacesamples:coal_ore_sample',
    'surfacesamples:copper_ore_sample',
    'surfacesamples:diamond_ore_sample',
    'surfacesamples:emerald_ore_sample',
    'surfacesamples:gold_ore_sample',
    'surfacesamples:iron_ore_sample',
    'surfacesamples:lapis_ore_sample',
    'surfacesamples:redstone_ore_sample',
    'surfacesamples:ancient_debris_sample',
    'surfacesamples:nether_gold_ore_sample',
    'surfacesamples:nether_quartz_ore_sample',
    'surfacesamples:quartz_ore_sample',
    'surfacesamples:andesite_sample',
    'surfacesamples:zinc_ore_sample',
  ]);
  EMI.add(event, 'kubejs', 'limestone', ['#kubejs:limestone']);
  EMI.add(event, 'kubejs', 'asurine', ['#kubejs:asurine']);
  EMI.add(event, 'kubejs', 'crimsite', ['#kubejs:crimsite']);
  EMI.add(event, 'kubejs', 'ochrum', ['#kubejs:ochrum']);
  EMI.add(event, 'kubejs', 'scoria', ['#kubejs:scoria']);
  EMI.add(event, 'kubejs', 'scorchia', ['#kubejs:scorchia']);
  EMI.add(event, 'kubejs', 'veridium', ['#kubejs:veridium']);
  EMI.add(event, 'kubejs', 'copycats', [
    'create_connected:copycat_block',
    'create_connected:copycat_slab',
    'create_connected:copycat_beam',
    'create_connected:copycat_vertical_step',
    'create_connected:copycat_stairs',
    'create_connected:copycat_fence',
    'create_connected:copycat_fence_gate',
    'create_connected:copycat_wall',
    'create_connected:copycat_board',
    'create_connected:copycat_box',
    'create_connected:copycat_catwalk',
    'copycats:copycat_block',
    'copycats:copycat_slab',
    'copycats:copycat_stairs',
    'copycats:copycat_vertical_stairs',
    'copycats:copycat_fence',
    'copycats:copycat_wall',
    'copycats:copycat_vertical_step',
    'copycats:copycat_beam',
    'copycats:copycat_slice',
    'copycats:copycat_vertical_slice',
    'copycats:copycat_corner_slice',
    'copycats:copycat_ghost_block',
    'copycats:copycat_layer',
    'copycats:copycat_half_panel',
    'copycats:copycat_pane',
    'copycats:copycat_flat_pane',
    'copycats:copycat_byte_panel',
    'copycats:copycat_byte',
    'copycats:copycat_board',
    'copycats:copycat_catwalk',
    'copycats:copycat_box',
    'copycats:copycat_half_layer',
    'copycats:copycat_vertical_half_layer',
    'copycats:copycat_stacked_half_layer',
    'copycats:copycat_slope',
    'copycats:copycat_vertical_slope',
    'copycats:copycat_slope_layer',
    'copycats:copycat_fence_gate',
    'copycats:copycat_wooden_button',
    'copycats:copycat_stone_button',
    'copycats:copycat_fluid_pipe',
    'create:copycat_step',
    'create:copycat_panel',
  ]);

  EMI.add(event, 'kubejs', 'industrial_iron', ['#kubejs:industrial_iron']);
  EMI.add(event, 'kubejs', 'girders', ['#kubejs:girder']);

  EMI.add(event, 'minecraft', 'doors', ['#minecraft:doors', 'copycats:copycat_iron_door']);

  EMI.add(event, 'minecraft', 'trapdoors', [
    '#minecraft:trapdoors',
    'copycats:copycat_trapdoor',
    'copycats:copycat_iron_trapdoor',
  ]);

  EMI.add(event, 'kubejs', 'scaffoldings', [
    'minecraft:scaffolding',
    'create:andesite_scaffolding',
    'create:brass_scaffolding',
    'create:copper_scaffolding',
    'createprism:andesite_glass_scaffolding',
    'createprism:brass_glass_scaffolding',
    'createprism:copper_glass_scaffolding',
    'createprism:andesite_clear_glass_scaffolding',
    'createprism:brass_clear_glass_scaffolding',
    'createprism:copper_clear_glass_scaffolding',
  ]);
});
