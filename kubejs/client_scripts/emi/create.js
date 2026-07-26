// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'kubejs', 'engine', [
    '#kubejs:portable_engine',
    [
      'create_simulated_additions:ckbgv_4_engine',
      'create_simulated_additions:ckbgi_2_engine',
      'create_simulated_additions:ckbg_mid_drive_engine',
    ],
  ]);
  EMI.add(event, 'kubejs', 'electric_motor', ['#kubejs:electric_motor']);
  EMI.add(event, 'kubejs', 'mechanical_drills', ['create:mechanical_drill', /^createmoredrillheads:.+_drill$/]);
  EMI.add(event, 'kubejs', 'handle', [
    'kineticgrip:grip_handle',
    'kineticgrip:grip_handle',
    'simulated:copper_handle',
    'simulated:white_handle',
    'simulated:orange_handle',
    'simulated:magenta_handle',
    'simulated:light_blue_handle',
    'simulated:yellow_handle',
    'simulated:lime_handle',
    'simulated:pink_handle',
    'simulated:gray_handle',
    'simulated:light_gray_handle',
    'simulated:cyan_handle',
    'simulated:purple_handle',
    'simulated:blue_handle',
    'simulated:brown_handle',
    'simulated:green_handle',
    'simulated:red_handle',
    'simulated:black_handle',
  ]);
  EMI.add(event, 'kubejs', 'valve_handles', ['#create:valve_handles']);
  EMI.add(event, 'kubejs', 'nameplate_blocks', ['#simulated:nameplate_items']);
  EMI.add(event, 'kubejs', 'table_cloths', ['#create:table_cloths']);
  EMI.add(event, 'kubejs', 'toolboxes', ['#create:toolboxes']);
  EMI.add(event, 'kubejs', 'postboxes', ['#create:postboxes']);
  EMI.add(event, 'kubejs', 'seats', ['#create:seats']);
  EMI.add(event, 'kubejs', 'hot_air_envelopes', [
    /^aeronautics:.+_envelope$/,
    /^aeroencasedpipe:.+_envelope_encased_pipe$/,
  ]);
  EMI.add(event, 'kubejs', 'tires', [
    'offroad:small_tire',
    'offroad:tire',
    'offroad:large_tire',
    'offroad:monstrous_tire',
    'offroad:sticky_small_tire',
    'offroad:sticky_tire',
    'offroad:sticky_large_tire',
    'offroad:sticky_monstrous_tire',
  ]);
  EMI.add(event, 'kubejs', 'fan_catalyst', [
    'create_connected:empty_fan_catalyst',
    'create_connected:fan_blasting_catalyst',
    'create_connected:fan_smoking_catalyst',
    'create_connected:fan_splashing_catalyst',
    'create_connected:fan_haunting_catalyst',
    'create_connected:fan_freezing_catalyst',
    'create_connected:fan_sanding_catalyst',
    'create_connected:fan_ending_catalyst_dragons_breath',
    'create_connected:fan_ending_catalyst_dragon_head',
    'create_connected:white_fan_dyeing_catalyst',
    'create_connected:orange_fan_dyeing_catalyst',
    'create_connected:magenta_fan_dyeing_catalyst',
    'create_connected:light_blue_fan_dyeing_catalyst',
    'create_connected:yellow_fan_dyeing_catalyst',
    'create_connected:lime_fan_dyeing_catalyst',
    'create_connected:pink_fan_dyeing_catalyst',
    'create_connected:gray_fan_dyeing_catalyst',
    'create_connected:light_gray_fan_dyeing_catalyst',
    'create_connected:cyan_fan_dyeing_catalyst',
    'create_connected:purple_fan_dyeing_catalyst',
    'create_connected:blue_fan_dyeing_catalyst',
    'create_connected:brown_fan_dyeing_catalyst',
    'create_connected:green_fan_dyeing_catalyst',
    'create_connected:red_fan_dyeing_catalyst',
    'create_connected:black_fan_dyeing_catalyst',
  ]);

  EMI.add(event, 'kubejs', 'electrical_panels', [/^electroenergetics:.*electrical_panel$/]);
  EMI.add(event, 'kubejs', 'packages', [
    '#create:packages',
    'deployer:rare_liukrast_package',
    'deployer:rare_swzo_package',
    'createsprings:sus_package',
  ]);
  EMI.add(event, 'kubejs', 'shafts', ['#kubejs:shaft', /^createcasing:.+_shaft$/, 'copycats:copycat_shaft']);
  EMI.add(event, 'kubejs', 'brass_gearing', ['#kubejs:gearing/brass', '#createadditionallogistics:flexible_shafts']);
  EMI.add(event, 'kubejs', 'andesite_gearing', ['#kubejs:gearing/andesite']);
  EMI.add(event, 'kubejs', 'casings', ['#create:casing']);
  EMI.add(event, 'kubejs', 'gauges', [
    '#kubejs:gauge',
    ['simulated_gauges:altitude_gauge', 'simulated_gauges:velocity_gauge', 'simulated_gauges:gimbal_gauge'],
  ]);
  EMI.add(event, 'kubejs', 'controller', ['#kubejs:controllers', 'linktablet:tablet', 'simulated:linked_typewriter']);
  EMI.add(event, 'kubejs', 'redstone_link', ['#kubejs:redstone/transmitter']);
  EMI.add(event, 'kubejs', 'cogs_and_gears', [
    '#kubejs:tiny_cog/wooden',
    '#kubejs:cog/wooden',
    '#kubejs:large_cog/wooden',
    '#kubejs:cog/stone',
    '#kubejs:cog/andesite',
    '#kubejs:cog/industrial',
    '#kubejs:large_cog/industrial',
    '#kubejs:tiny_cog/brass',
    '#kubejs:cog/brass',
    '#kubejs:large_cog/brass',
    '#kubejs:cog/magnet',
    '#kubejs:large_cog/magnet',
    '#kubejs:cog/grindstone',
    /^createcasing:.+_cogwheel$/,
    'copycats:copycat_cogwheel',
    'copycats:copycat_large_cogwheel',
    'gnkinetics:ring_gear',
  ]);

  EMI.add(event, 'kubejs', 'dye_fluids', [
    'fluid:create_dragons_plus:white_dye',
    'fluid:create_dragons_plus:light_gray_dye',
    'fluid:create_dragons_plus:gray_dye',
    'fluid:create_dragons_plus:black_dye',
    'fluid:create_dragons_plus:brown_dye',
    'fluid:create_dragons_plus:red_dye',
    'fluid:create_dragons_plus:orange_dye',
    'fluid:create_dragons_plus:yellow_dye',
    'fluid:create_dragons_plus:lime_dye',
    'fluid:create_dragons_plus:green_dye',
    'fluid:create_dragons_plus:cyan_dye',
    'fluid:create_dragons_plus:light_blue_dye',
    'fluid:create_dragons_plus:blue_dye',
    'fluid:create_dragons_plus:purple_dye',
    'fluid:create_dragons_plus:magenta_dye',
    'fluid:create_dragons_plus:pink_dye',
  ]);

  EMI.add(event, 'kubejs', 'cement', [
    'fluid:createdieselgenerators:white_cement',
    'fluid:createdieselgenerators:light_gray_cement',
    'fluid:createdieselgenerators:gray_cement',
    'fluid:createdieselgenerators:black_cement',
    'fluid:createdieselgenerators:brown_cement',
    'fluid:createdieselgenerators:red_cement',
    'fluid:createdieselgenerators:orange_cement',
    'fluid:createdieselgenerators:yellow_cement',
    'fluid:createdieselgenerators:lime_cement',
    'fluid:createdieselgenerators:green_cement',
    'fluid:createdieselgenerators:cyan_cement',
    'fluid:createdieselgenerators:light_blue_cement',
    'fluid:createdieselgenerators:blue_cement',
    'fluid:createdieselgenerators:purple_cement',
    'fluid:createdieselgenerators:magenta_cement',
    'fluid:createdieselgenerators:pink_cement',
  ]);

  EMI.add(event, 'kubejs', 'molten_ores', [
    'fluid:kubejs:molten_iron_ore',
    'fluid:kubejs:molten_gold_ore',
    'fluid:kubejs:molten_copper_ore',
    'fluid:kubejs:molten_zinc_ore',
  ]);

  EMI.add(event, 'kubejs', 'electric_wire_spools', ['#electroenergetics:wire_spools']);
  EMI.add(event, 'kubejs', 'frogports', ['#create_vibrant_vaults:frogports']);
  EMI.add(event, 'kubejs', 'stock_links', ['#create_vibrant_vaults:stock_links']);
  EMI.add(event, 'kubejs', 'redstone_requesters', ['#create_vibrant_vaults:redstone_requesters']);
  EMI.add(event, 'kubejs', 'packagers', ['#create_vibrant_vaults:packagers']);
  EMI.add(event, 'kubejs', 'vaults', ['#create_vibrant_vaults:item_vaults']);
  EMI.add(event, 'kubejs', 'shipping_containers', [/^create_vibrant_vaults:.*shipping_container.*$/]);
  EMI.add(event, 'kubejs', 'andesite_item_logistics', ['#kubejs:andesite_item_logistics']);
  EMI.add(event, 'kubejs', 'brass_item_logistics', ['#kubejs:brass_item_logistics']);
  EMI.add(event, 'kubejs', 'mechanical_farming_equipment', ['#kubejs:mechanical_farming']);
});
