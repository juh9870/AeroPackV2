// priority: 0

REG.machinery({
  machine: 'kubejs:andesite_machine',
  sawing: [
    ['create:gearbox', 2],
    ['minecraft:piston', 2],
    ['create:nozzle', 1],
    ['create:andesite_funnel', 4],
    ['create:speedometer', 1],
    ['create:stressometer', 1],
    ['create:cart_assembler', 1],
    ['create:contraption_controls', 2],
    ['create:portable_storage_interface', 2],
    ['create:mechanical_harvester', 4],
    ['create:item_vault', 4],
    ['create:display_board', 4],
    ['simulated:auger_shaft', 2],
  ],
  applying: [
    ['minecraft:crafter', 1, 'minecraft:crafting_table'],
    ['create:schematicannon', 1, 'minecraft:dispenser'],
    ['create:encased_fan', 1, 'create:propeller'],
    ['create:millstone', 1, 'minecraft:grindstone'],
    ['create:mechanical_press', 1, 'minecraft:iron_block'],
    ['create:mechanical_mixer', 1, 'create:whisk'],
    ['create:weighted_ejector', 1, 'simulated:spring'],
    ['create:rope_pulley', 1, 'simulated:rope_coupling'],
    ['create:sticker', 1, 'minecraft:slime_block'],
    ['create:mechanical_drill', 1, 'kubejs:drill_head'],
    ['create:mechanical_saw', 1, 'minecraft:iron_axe'],
    ['create:deployer', 1, 'create:brass_hand'],
    ['create:mechanical_roller', 1, 'create:crushing_wheel'],
    ['createsprings:spring_catapult', 1, 'createsprings:spring'],
    ['simulated:physics_assembler', 1, 'minecraft:lever'],
    ['simulated:rope_winch', 2, 'simulated:rope_connector'],
    ['aeronautics:adjustable_burner', 1, 'minecraft:campfire'],
    ['createvintageneoforged:belt_grinder', 1, 'createvintageneoforged:grinder_belt'],
    ['createvintageneoforged:spring_coiling_machine', 1, 'createvintageneoforged:spring_coiling_machine_wheel'],
    ['createvintageneoforged:vibrating_table', 1, 'create:andesite_table_cloth'],
  ],
});
REG.machinery({
  machine: 'kubejs:brass_machine',
  sawing: [
    ['create:brass_funnel', 4],
    ['create:nixie_tube', 4],
    ['aeronautics_utility_objects:brass_universal_joint', 2],
  ],
  applying: [
    ['create:elevator_pulley', 1, 'simulated:rope_coupling'],
    ['create:mechanical_crafter', 3, 'minecraft:crafting_table'],
    ['create:rotation_speed_controller', 1, 'create:cogwheel'],
    ['create:mechanical_arm', 1, 'create:brass_hand'],
    ['simulated:linked_typewriter', 1, 'create:linked_controller'],
    ['aeronautics_utility_objects:hydraulic_rod', 1, 'create:shaft'],
    ['create:clockwork_bearing', 1, 'minecraft:clock'],
    ['aeronautics:gyroscopic_propeller_bearing', 1, 'simulated:gyroscopic_mechanism'],
    ['create_connected:inventory_access_port', 1, 'minecraft:chest'],
    ['create_connected:empty_fan_catalyst', 1, 'minecraft:iron_bars'],
    ['createsprings:friction_welder', 1, 'createsprings:spring_alloy_sheet'],
  ],
});
REG.machinery({
  machine: 'kubejs:copper_machine',
  sawing: [
    ['create:spout', 1],
    ['create:portable_fluid_interface', 2],
    ['create:steam_engine', 1],
    ['create:steam_whistle', 1],
  ],
  applying: [
    ['create:item_drain', 1, 'create:depot'],
    ['create:hose_pulley', 1, 'rubberworks:rubber_block'],
    ['create_enchantment_industry:experience_lantern', 1, 'create:experience_block'],
    ['create:fluid_tank', 4, 'minecraft:barrel'],
    ['aeronautics:steam_vent', 1, 'minecraft:campfire'],
    ['create_submarine:ballast_tank', 1, 'create:industrial_iron_block'],
    ['create_submarine:ballast_vent', 1, 'create:copper_valve_handle'],
    ['create_submarine:oxygene_diffuser', 1, 'create:nozzle'],
    ['create_submarine:electrolyzer', 1, 'electroenergetics:double_connector'],
    ['rubberworks:sapper', 1, 'create:mechanical_drill'],
    ['rubberworks:compressor', 1, 'create:basin'],
    ['createvintageneoforged:vacuum_chamber', 1, 'create:chute'],
  ],
});
REG.machinery({
  machine: 'kubejs:locomotion_machine',
  sawing: [
    ['create:track_station', 2],
    ['create:track_signal', 4],
    ['create:track_observer', 2],
    ['create:controls', 2],
    ['compactgearbox:compact_gearbox', 1],
    ['compactgearbox:sequential_gearbox', 1],
    ['create_submarine:pulley', 1],
  ],
  applying: [
    ['compactgearbox:sequential_gearbox', 1, 'create:precision_mechanism'],
    ['create_simulated_thrusters:redstone_thruster', 1, 'minecraft:dropper'],
    ['create_simulated_thrusters:blaze_thruster', 1, 'create:blaze_burner'],
    ['simulated:navigation_table', 1, 'minecraft:compass'],
    ['offroad:rockcutting_wheel', 1, 'create:crushing_wheel'],
    ['offroad:wheel_mount', 1, 'simulated:spring'],
    ['simulated:docking_connector', 1, 'create:brass_block'],
  ],
});
REG.machinery({
  machine: 'kubejs:logistics_machine',
  sawing: [
    ['create:packager', 2],
    ['create:package_frogport', 2],
    ['create:white_postbox', 1],
    ['create:stock_link', 4],
    ['create:stock_ticker', 1],
    ['create:redstone_requester', 2],
    ['create:factory_gauge', 8],
    ['createadditionallogistics:package_accelerator', 1],
    ['createadditionallogistics:package_editor', 1],
    ['repackaged:packager_connector', 4],
  ],
  applying: [
    ['createadditionallogistics:cash_register', 1, 'create:linked_controller'],
    ['repackaged:fluid_packager', 2, 'create:fluid_tank'],
    ['repackaged:package_shelf', 2, 'create:item_vault'],
  ],
});
REG.machinery({
  machine: 'kubejs:sentient_machine',
  sawing: [
    ['create:cuckoo_clock', 1],
    ['create:stockpile_switch', 2],
    ['create:display_link', 4],
    ['extra_gauges:display_collector', 4],
    ['create_connected:dashboard', 2],
    ['redstonepen:control_box', 2],
  ],
  applying: [
    ['create:content_observer', 1, 'minecraft:observer'],
    ['create_mobile_packages:robo_bee', 4, 'create:propeller'],
    ['create_mobile_packages:bee_port', 1, 'minecraft:beehive'],
    ['create_submarine:barometer', 1, 'minecraft:pufferfish'],
  ],
});
REG.machinery({
  machine: 'kubejs:optical_machine',
  sawing: [
    ['create_optical:beam_reader', 1],
    ['create_optical:optical_source', 1],
    ['simulated:laser_pointer', 1],
    ['simulated:laser_sensor', 1],
    ['simulated:optical_sensor', 1],
    ['createvintageneoforged:laser', 1],
  ],
  applying: [
    ['create_optical:thermal_optical_source', 1, 'create:fluid_tank'],
    ['create_optical:optical_receptor', 1, 'create_optical:copper_coil'],
    ['create_optical:heavy_optical_receptor', 1, 'create_optical:golden_coil'],
    ['create_optical:hologram_source', 1, 'create_optical:zinc_coil'],
    ['create_optical:beam_condenser', 1, 'create_optical:rose_quartz_catalyst_coil'],
    ['create_optical:beam_focuser', 1, 'create_optical:mirror'],
    ['create_optical:beam_modulator', 1, 'create:transmitter'],
  ],
});
REG.machinery({
  machine: 'morered:hexidecrubrometer',
  sawing: [
    ['create:redstone_link', 4],
    ['minecraft:repeater', 8],
    ['create:redstone_contact', 4],
    ['dashpanels:control_panel', 2],
    ['aeroworks:control_desk', 2],
    ['dashpanels:switch', 8],
    ['aeroworks:throttle_quadrant_module', 8],
    ['dashpanels:panel_link', 2],
    ['dashpanels:cable', 8],
    ['minecraft:observer', 2],
  ],
  applying: [
    ['simulated:redstone_magnet', 2, 'electroenergetics:magnet'],
    ['simulated:gimbal_sensor', 1, 'simulated:gyroscopic_mechanism'],
    ['simulated:velocity_sensor', 1, 'create:propeller'],
    ['simulated:altitude_sensor', 1, 'minecraft:paper'],
    ['create_optical:optical_sensor', 1, 'create_optical:optical_device'],
  ],
});
REG.machinery({
  machine: 'simulated:red_portable_engine',
  sawing: [],
  applying: [
    ['create_simulated_additions:ckbgv_4_engine', 1, 'minecraft:blast_furnace'],
    ['create_simulated_additions:ckbgi_2_engine', 1, 'minecraft:furnace'],
    ['createdieselgenerators:diesel_engine', 1, 'create:fluid_tank'],
    ['createdieselgenerators:huge_diesel_engine', 1, 'create:steam_engine'],
    ['create_simulated_additions:ckbg_mid_drive_engine', 1, 'create:cogwheel'],
    ['electroenergetics:red_electric_motor', 1, 'electroenergetics:commutator'],
  ],
});
REG.machinery({
  machine: 'create:mechanical_drill',
  noInWorldCrafting: true,
  sawing: [],
  applying: [
    ['createmoredrillheads:wooden_drill', 1, 'minecraft:wooden_pickaxe'],
    ['createmoredrillheads:stone_drill', 1, 'minecraft:stone_pickaxe'],
    ['createmoredrillheads:iron_drill', 1, 'minecraft:iron_pickaxe'],
    ['createmoredrillheads:golden_drill', 1, 'minecraft:golden_pickaxe'],
    ['createmoredrillheads:diamond_drill', 1, 'minecraft:diamond_pickaxe'],
    ['createmoredrillheads:netherite_drill', 1, 'minecraft:netherite_pickaxe'],
  ],
});
REG.machinery({
  machine: 'aeronautics:gyroscopic_propeller_bearing',
  sawing: [],
  applying: [['aeronautics:smart_propeller', 2, 'create:propeller']],
});
REG.machinery({
  machine: 'aeronautics:propeller_bearing',
  sawing: [],
  applying: [
    ['aeronautics:andesite_propeller', 2, 'create:propeller'],
    ['create_submarine:submarine_propeller', 1, 'create:industrial_iron_block'],
  ],
});
REG.machinery({
  machine: 'create:analog_lever',
  noInWorldCrafting: true,
  allowNormalCrafting: true,
  sawing: [],
  applying: [
    ['aeroworks:joystick', 1, 'simulated:gyroscopic_mechanism'],
    ['simulated:throttle_lever', 1, 'create:brass_casing'],
    ['simulated:steering_wheel', 1, 'create:large_cogwheel'],
    ['compactgearbox:gearbox_controller', 1, 'create:sturdy_sheet'],
    ['create:linked_controller', 1, 'create:redstone_link'],
  ],
});
