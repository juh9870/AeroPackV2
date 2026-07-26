(() => {
  /**
   * @typedef {Object} CogMaterial
   * @property {string} name
   * @property {RegistryTypes.Item} [cogPaint]
   * @property {RegistryTypes.Item} [shaftPaint]
   * @property {RegistryTypes.Item} [paint]
   * @property {boolean} [skipSmallCogwheel]
   */

  /**
   * @type {CogMaterial[]}
   */
  const cogMaterials = [
    {
      cogPaint: 'create:andesite_alloy',
      name: 'andesite',
      skipSmallCogwheel: true,
    },
    { shaftPaint: 'create:brass_ingot', name: 'brass' },
    {
      paint: 'minecraft:copper_ingot',
      name: 'copper',
    },
    {
      shaftPaint: 'create:zinc_nugget',
      cogPaint: 'create:zinc_ingot',
      name: 'zinc',
    },
    { shaftPaint: 'minecraft:glass_pane', name: 'glass' },
    { paint: 'minecraft:acacia_planks', name: 'acacia' },
    { paint: 'minecraft:birch_planks', name: 'birch' },
    { paint: 'minecraft:bamboo_planks', name: 'bamboo' },
    { paint: 'minecraft:cherry_planks', name: 'cherry' },
    { paint: 'minecraft:crimson_planks', name: 'crimson' },
    { paint: 'minecraft:dark_oak_planks', name: 'dark_oak' },
    { paint: 'minecraft:oak_planks', name: 'oak' },
    { paint: 'minecraft:jungle_planks', name: 'jungle' },
    { paint: 'minecraft:mangrove_planks', name: 'mangrove' },
    { paint: 'minecraft:warped_planks', name: 'warped' },
    { shaftPaint: 'minecraft:spruce_planks', name: 'spruce' },
  ];

  for (const material of cogMaterials) {
    let shaftPaint = material.shaftPaint || material.paint;
    let cogPaint = material.cogPaint || material.paint;
    if (shaftPaint) {
      REG.painting(
        /** @type {RegistryTypes.Item} */ ('createcasing:' + material.name + '_shaft'),
        'create:shaft',
        shaftPaint,
      );
    }
    if (cogPaint) {
      if (!material.skipSmallCogwheel) {
        REG.cog('kubejs:cog/' + material.name, {
          base: /** @type {RegistryTypes.Item} */ ('createcasing:' + material.name + '_cogwheel'),
          parent: 'kubejs:cog/wooden',
          material: cogPaint,
        });
      }
      REG.cog('kubejs:large_cog/' + material.name, {
        base: /** @type {RegistryTypes.Item} */ ('createcasing:' + material.name + '_large_cogwheel'),
        parent: 'kubejs:large_cog/wooden',
        material: cogPaint,
      });
    }
  }

  /**
   * @typedef EncMaterial
   * @property {RegistryTypes.Item} casing
   * @property {string} name
   */
  /**
   * @typedef EncMachine
   * @property {RegistryTypes.Item} base
   * @property {string} name
   * @property {string} [group]
   */

  /**
   * @type {EncMaterial[]}
   */
  const materials = [
    { casing: 'create:brass_casing', name: 'brass' },
    { casing: 'create:copper_casing', name: 'copper' },
    { casing: 'create:railway_casing', name: 'railway' },
    {
      casing: 'create:shadow_steel_casing',
      name: 'shadow_steel',
    },
    {
      casing: 'create:refined_radiance_casing',
      name: 'refined_radiance',
    },
    { casing: 'createcasing:creative_casing', name: 'creative' },
    { casing: 'create:industrial_iron_block', name: 'industrial_iron' },
    { casing: 'create:weathered_iron_block', name: 'weathered_iron' },
  ];

  /**
   * @type {EncMaterial[]}
   */
  const fluidMaterials = [
    { casing: 'create:andesite_alloy', name: 'andesite' },
    { casing: 'create:brass_ingot', name: 'brass' },
    { casing: 'create:zinc_ingot', name: 'zinc' },
  ];

  /**
   * @type {EncMachine[]}
   */
  const machines = [
    { name: '{0}_gearbox', base: 'create:gearbox', group: 'gearing' },
    {
      name: 'vertical_{0}_gearbox',
      base: 'create:vertical_gearbox',
      group: 'gearing',
    },
    { name: '{0}_press', base: 'create:mechanical_press' },
    { name: '{0}_mixer', base: 'create:mechanical_mixer' },
    { name: '{0}_depot', base: 'create:depot' },
    {
      name: '{0}_encased_chain_drive',
      base: 'create:encased_chain_drive',
      group: 'gearing',
    },
    {
      name: '{0}_adjustable_chain_gearshift',
      base: 'create:adjustable_chain_gearshift',
      group: 'gearing',
    },
    {
      name: '{0}_configurable_gearbox',
      base: 'createcasing:andesite_configurable_gearbox',
      group: 'gearing',
    },
    { name: '{0}_chain_conveyor', base: 'create:chain_conveyor' },
    { name: '{0}_gearshift', base: 'create:gearshift', group: 'gearing' },
    { name: '{0}_clutch', base: 'create:clutch', group: 'gearing' },
    {
      name: '{0}_automatic_clutch',
      base: 'createcasing:andesite_automatic_clutch',
      group: 'gearing',
    },
    { name: '{0}_deployer', base: 'create:deployer' },
    {
      name: '{0}_portable_storage_interface',
      base: 'create:portable_storage_interface',
    },
    { name: '{0}_encased_fan', base: 'create:encased_fan' },
    { name: '{0}_mechanical_harvester', base: 'create:mechanical_harvester' },
    { name: '{0}_mechanical_saw', base: 'create:mechanical_saw' },
    { name: '{0}_mechanical_drill', base: 'create:mechanical_drill' },
    { name: '{0}_mechanical_plough', base: 'create:mechanical_plough' },
    { name: '{0}_mechanical_roller', base: 'create:mechanical_roller' },
  ];

  /**
   * @type {EncMachine[]}
   */
  const fluidMachines = [
    { name: '{0}_fluid_pipe', base: 'create:fluid_pipe' },
    { name: '{0}_mechanical_pump', base: 'create:mechanical_pump' },
    { name: '{0}_smart_fluid_pipe', base: 'create:smart_fluid_pipe' },
    { name: '{0}_fluid_tank', base: 'create:fluid_tank' },
    { name: '{0}_steam_engine', base: 'create:steam_engine' },
    { name: '{0}_item_drain', base: 'create:item_drain' },
    { name: '{0}_fluid_valve', base: 'create:fluid_valve' },
    { name: '{0}_valve_handle', base: 'create:copper_valve_handle' },
    { name: '{0}_hose_pulley', base: 'create:hose_pulley' },
    {
      name: '{0}_portable_fluid_interface',
      base: 'create:portable_fluid_interface',
    },
    { name: '{0}_steam_whistle', base: 'create:steam_whistle' },
    { name: '{0}_spout', base: 'create:spout' },
  ];

  /**
   *
   * @param {string} kind
   * @param {EncMaterial[]} materials
   * @param {EncMachine[]} machines
   */
  function processMaterial(kind, materials, machines) {
    for (const material of materials) {
      let tag = 'kubejs:encased_' + kind + '/' + material.name;
      /**
       * @type {Record<string, RegistryTypes.Item[]>}
       */
      let groups = {};
      for (const machine of machines) {
        let machineName = /** @type {RegistryTypes.Item} */ (
          'createcasing:' + machine.name.replace('{0}', material.name)
        );
        REG.addTag(tag, machineName);
        if (machine.group) {
          groups[machine.group] = groups[machine.group] || [];
          groups[machine.group].push(machineName);
        }
        REG.painting(machineName, machine.base, material.casing);
      }
      for (const id in groups) {
        let items = groups[id];
        REG.tagGroup('kubejs:encased_' + id + '/' + material.name, {
          primary: items[0],
          items: items,
          recipesWhitelist: [],
        });
      }
    }
  }

  processMaterial('machinery', materials, machines);
  processMaterial('piping', fluidMaterials, fluidMachines);
})();

REG.yeetItem('createcasing:creative_casing');
REG.yeetItem('createcasing:brass_cogwheel');
REG.yeetItem('createcasing:brass_large_cogwheel');
REG.yeetItem('createcasing:andesite_cogwheel');
REG.yeetItem('createcasing:andesite_sheet');
REG.yeetItem('createcasing:zinc_sheet');
