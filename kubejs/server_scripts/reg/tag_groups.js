// priority: 0

REG.tagGroup('kubejs:shaft', {
  items: [
    'create:shaft',
    'createadditionallogistics:lazy_shaft',
    'create:gantry_shaft',
    'create_connected:shear_pin',
    'create:piston_extension_pole',
    'gnkinetics:worm_gear',
  ],
  recipesWhitelist: ['create:shaft'],
});
REG.tagGroup('kubejs:belt', {
  items: [
    'create:belt_connector',
    'cmverticaladditions:vertical_belt_connector',
    'createtransmission:transmission_chain',
  ],
  recipesWhitelist: ['create:belt_connector'],
});
REG.tagGroup('kubejs:gearing/andesite', [
  'create:gearbox',
  'create:vertical_gearbox',
  'create_connected:six_way_gearbox',
  'create_connected:vertical_six_way_gearbox',
  'create_connected:parallel_gearbox',
  'create_connected:vertical_parallel_gearbox',
  'createcasing:andesite_configurable_gearbox',
  'create:gearshift',
  'create_connected:inverted_gearshift',
  'create:clutch',
  'create_connected:inverted_clutch',
  'create_connected:overstress_clutch',
  'create_connected:freewheel_clutch',
  'create_connected:centrifugal_clutch',
  'createcasing:andesite_automatic_clutch',
  'create:encased_chain_drive',
  'create:adjustable_chain_gearshift',
  'simulated:directional_gearshift',
  'create:chain_conveyor',
  'create_connected:cross_connector',
  'create_connected:brake',
  'simulated:torsion_spring',
]);
REG.tagGroup('kubejs:gearing/brass', [
  'create:rotation_speed_controller',
  'create:sequenced_gearshift',
  'createadditionallogistics:flexible_shaft',
  'aeroworks:mechanical_servo',
  'aeroworks:stepper_servo',
  'simulated:analog_transmission',
  'create_connected:brass_gearbox',
  'create_connected:vertical_brass_gearbox',
  'create_connected:kinetic_bridge',
  'aeronautics_utility_objects:hydraulic_regulator',
]);
REG.tagGroup('kubejs:redstone/transmitter', [
  'create:redstone_link',
  'extra_gauges:linked_lever',
  'extra_gauges:linked_button',
  'create_connected:linked_transmitter',
  'simulated:directional_linked_receiver',
  'simulated:modulating_linked_receiver',
]);
REG.tagGroup('kubejs:redstone/circuits', [
  'minecraft:repeater',
  'minecraft:comparator',
  'create:powered_toggle_latch',
  'create:powered_latch',
  'create:pulse_timer',
  'create:pulse_extender',
  'create:pulse_repeater',
  'create_simulated_additions:ckb_redstone_computator',
  'createsprings:analog_toggle_latch',
  'simulated:redstone_accumulator',
  'simulated:redstone_inductor',
  'create_connected:sequenced_pulse_generator',
  'redstonepen:relay',
  'redstonepen:inverted_relay',
  'redstonepen:pulse_relay',
  'redstonepen:bistable_relay',
  'redstonepen:bridge_relay',
  'morered:latch',
  'morered:pulse_gate',
  'morered:redwire_post',
  'morered:redwire_post_plate',
  'morered:redwire_post_relay_plate',
  'morered:bundled_cable_post',
  'morered:bundled_cable_relay_plate',
  'morered:diode',
  'morered:not_gate',
  'morered:nor_gate',
  'morered:or_gate',
  'morered:nand_gate',
  'morered:and_gate',
  'morered:xor_gate',
  'morered:xnor_gate',
  'morered:multiplexer',
  'morered:and_2_gate',
  'morered:nand_2_gate',
  'morered:bitwise_diode',
  'morered:bitwise_not_gate',
  'morered:bitwise_or_gate',
  'morered:bitwise_and_gate',
  'morered:bitwise_xor_gate',
  'morered:bitwise_xnor_gate',
]);
REG.tagGroup('kubejs:wires', [
  'dashpanels:cable',
  'morered:red_alloy_wire',
  'morered:white_network_cable',
  'morered:orange_network_cable',
  'morered:magenta_network_cable',
  'morered:light_blue_network_cable',
  'morered:yellow_network_cable',
  'morered:lime_network_cable',
  'morered:pink_network_cable',
  'morered:gray_network_cable',
  'morered:light_gray_network_cable',
  'morered:cyan_network_cable',
  'morered:purple_network_cable',
  'morered:blue_network_cable',
  'morered:brown_network_cable',
  'morered:green_network_cable',
  'morered:red_network_cable',
  'morered:black_network_cable',
  'morered:bundled_network_cable',
]);
REG.tagGroup('kubejs:mechanism/andesite', [
  'minecraft:piston',
  'minecraft:sticky_piston',
  'create:mechanical_piston',
  'create:sticky_mechanical_piston',
  'create:gantry_carriage',
  'create:windmill_bearing',
  'create_windmill_speed_control:visual_windmill_bearing',
  'create:mechanical_bearing',
  'simulated:swivel_bearing',
  'aeronautics:propeller_bearing',
  'bits_n_bobs:cogwheel_chain_carriage',
  'offroad:borehead_bearing',
]);
REG.tagGroup('kubejs:filters', {
  items: [
    'create:filter',
    'create:attribute_filter',
    'create:package_filter',
    'createdieselgenerators:entity_filter',
    'createshufflefilter:shuffle_filter',
    'createshufflefilter:weighted_shuffle_filter',
  ],
  recipesWhitelist: ['create:filter'],
});
REG.tagGroup('kubejs:dashpanel_modules', [
  'dashpanels:switch',
  'dashpanels:knob',
  'dashpanels:control_lever',
  'dashpanels:indicator_bulb',
  'dashpanels:momentary_switch',
  'dashpanels:joystick',
  'dashpanels:label',
  'dashpanels:seven_segment',
  'dashpanels:navball',
]);
REG.tagGroup('kubejs:aeroworks_modules', [
  'aeroworks:throttle_quadrant_module',
  'aeroworks:lever_module',
  'aeroworks:button_panel_module',
  'aeroworks:button_keypad_module',
  'aeroworks:joystick_module',
  'aeroworks:button_module',
  'aeroworks:wheel_module',
  'aeroworks:yoke_module',
]);
REG.tagGroup('kubejs:transmission/head', [
  'aeronautics_utility_objects:brass_universal_joint',
  'aeronautics_utility_objects:hydraulic_connection_head',
  'aeronautics_utility_objects:hydraulic_hinge_head',
]);
REG.tagGroup('kubejs:transmission/rod', [
  'aeronautics_utility_objects:universal_joint_rod',
  'aeronautics_utility_objects:universal_joint_rod2',
  'aeronautics_utility_objects:hydraulic_rod',
]);
REG.tagGroup('kubejs:gauge', [
  'create:factory_gauge',
  'repackaged:fluid_gauge',
  'repackaged:energy_gauge',
  'extra_gauges:logic_gauge',
  'extra_gauges:integer_gauge',
  'extra_gauges:comparator_gauge',
  'extra_gauges:counter_gauge',
  'extra_gauges:passive_gauge',
  'extra_gauges:string_gauge',
  'extra_gauges:expression_gauge',
  'extra_gauges:filter_gauge',
  'extra_gauges:integer_selector',
  'extra_gauges:redstone_port',
  'extra_gauges:rose_quartz_port',
]);
REG.tagGroup('kubejs:nixie_tube', ['create:nixie_tube', 'bits_n_bobs:nixie_board', 'bits_n_bobs:large_nixie_tube']);
REG.tagGroup('kubejs:controllers', {
  items: ['create:linked_controller', 'redstonepen:remote', 'create_tweaked_controllers:tweaked_linked_controller'],
  recipesWhitelist: [],
  noSelector: true,
});
REG.tagGroup('kubejs:andesite_item_logistics', [
  'create:andesite_funnel',
  'create:chute',
  'minecraft:hopper',
  'create:item_hatch',
  'create:andesite_tunnel',
]);
REG.tagGroup('kubejs:brass_item_logistics', [
  'create:brass_funnel',
  'create:smart_chute',
  'create_connected:brass_chute',
  'create:brass_tunnel',
]);
REG.tagGroup('kubejs:mechanical_farming', ['create:mechanical_harvester', 'create:mechanical_plough']);

// flips - like tag groups but no stopnecutting, just crafting directly into eachother and can be swapped by hittin'em with a hammer

REG.itemsFlip('create:speedometer', 'create:stressometer');
REG.itemsFlip('createdieselgenerators:large_diesel_engine', 'createdieselgenerators:diesel_engine');
REG.itemsFlip('kineticgrip:grip_handle', 'simulated:iron_handle');
REG.itemsFlip('simulated:auger_shaft', 'simulated:auger_cog');
REG.itemsFlip('aeronautics:andesite_propeller', 'aeronautics:wooden_propeller');
REG.itemsFlip('offroad:wheel_mount', 'tracks:track_mount');
REG.itemsFlip('tracks:small_track_drive_wheel', 'tracks:small_suspension_track');
REG.itemsFlip('create:fluid_tank', 'create_connected:fluid_vessel');
REG.itemsFlip('createvintageneoforged:centrifuge', 'create:mechanical_mixer');
REG.itemsFlip('createvintageneoforged:curving_press', 'create:mechanical_press');
