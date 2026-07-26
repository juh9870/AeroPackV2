// priority: 0

(() => {
  // T3
  TOOLS.newMaterial('golem_beacon', {
    tier: '3*',
    template: 'minecraft:beacon',
    noTemplateTags: true,
    material: { item: 'minecraft:nether_star' },
    recycleResults: [
      ['minecraft:beacon', 1],
      ['minecraft:diamond', 1, 0.5],
      ['minecraft:nether_star', 0.5],
    ],
    whitelist: ['golem_boots'],
    nameMapping: {
      golem_boots: 'modulargolems:beacon_boots',
    },
  });
  TOOLS.newMaterial('golem_slicing', {
    tier: '3*',
    template: 'minecraft:netherite_upgrade_smithing_template',
    noTemplateTags: true,
    material: { item: 'create:mechanical_saw' },
    recycleResults: [
      ['minecraft:diamond', 1, 0.5],
      ['create:mechanical_saw', 1],
    ],
    whitelist: ['golem_axe'],
    nameMapping: {
      golem_axe: 'modulargolems:golem_slicing_axe',
    },
  });

  // T4
  TOOLS.newMaterial('golem_heavy', {
    tier: '4*',
    template: 'minecraft:heavy_core',
    noTemplateTags: true,
    material: { item: 'minecraft:breeze_rod' },
    recycleResults: [
      ['minecraft:heavy_core', 1],
      ['minecraft:netherite_ingot', 1],
      ['minecraft:breeze_rod', 0.5],
    ],
    whitelist: ['golem_spear'],
    nameMapping: {
      golem_spear: 'modulargolems:heavy_golem_spear',
    },
  });
  TOOLS.newMaterial('golem_flame', {
    tier: '4*',
    template: 'l2complements:flame_upgrade_smithing_template',
    noTemplateTags: true,
    material: { item: 'rainbowcompound:blazeite_ingot' },
    recycleResults: [
      ['rainbowcompound:blazeite_ingot', 1],
      ['minecraft:netherite_ingot', 1],
    ],
    whitelist: ['golem_sword'],
    nameMapping: {
      golem_sword: 'golemdungeons:flame_sword',
    },
  });

  REG.addTag('kubejs:smithing_template', [
    'kubejs:golem_helmet_template',
    'kubejs:golem_chestplate_template',
    'kubejs:golem_leggings_template',
    'kubejs:golem_boots_template',
    'kubejs:golem_axe_mould',
    'kubejs:golem_spear_mould',
    'kubejs:golem_sword_mould',
    'kubejs:golem_bow_mould',
  ]);

  REG.addTag(TOOLS.upgradesIntoMaterialTag('golem_bow', 'netherite'), 'modulargolems:iron_mecha_bow');
  REG.addTag(TOOLS.recyclesIntoMaterialTag('golem_bow', 'iron'), 'modulargolems:netherite_mecha_bow');
  REG.addTag(TOOLS.recyclesIntoMaterialTag('bow', 'wood'), 'modulargolems:iron_mecha_bow');

  /**
   * @type {Record<GolemToolKind | GolemArmorKind, [ToolKind, RegistryTypes.Item]>}
   */
  const GOLEM_TOOL_MAP = {
    golem_axe: ['axe', 'kubejs:golem_axe_mould'],
    golem_spear: ['sword', 'kubejs:golem_spear_mould'],
    golem_sword: ['sword', 'kubejs:golem_sword_mould'],
    golem_helmet: ['helmet', 'kubejs:golem_helmet_template'],
    golem_chestplate: ['chestplate', 'kubejs:golem_chestplate_template'],
    golem_leggings: ['leggings', 'kubejs:golem_leggings_template'],
    golem_boots: ['boots', 'kubejs:golem_boots_template'],
    golem_bow: ['bow', 'kubejs:golem_bow_mould'],
  };

  ServerEvents.tags('item', (event) => {
    for (const name in TOOLS.REGISTRY) {
      let mat = TOOLS.REGISTRY[name];
      for (const golemTool of TOOLS.GOLEM_ALL) {
        let def = GOLEM_TOOL_MAP[golemTool];
        let baseTool = def[0];
        if (mat.nameMapping[golemTool] && mat.nameMapping[baseTool]) {
          event.add(TOOLS.recyclesIntoMaterialTag(baseTool, name), mat.nameMapping[golemTool]);
        }
      }
    }
  });

  ServerEvents.recipes((event) => {
    for (const name in TOOLS.REGISTRY) {
      let mat = TOOLS.REGISTRY[name];

      for (const golemTool of TOOLS.GOLEM_ALL) {
        let def = GOLEM_TOOL_MAP[golemTool];
        let baseTool = def[0];
        let template = def[1];
        if (mat.nameMapping[golemTool] && mat.nameMapping[baseTool]) {
          event.remove({ output: mat.nameMapping[golemTool] });

          TOOLS.toolUpgrade(
            event,
            'golem_upgrade',
            mat.nameMapping[golemTool],
            template,
            { item: mat.nameMapping[baseTool] },
            mat.material,
          );
        }
      }
    }

    event.remove({ output: 'modulargolems:iron_mecha_bow' });
    TOOLS.toolUpgrade(
      event,
      'golem_upgrade',
      'modulargolems:iron_mecha_bow',
      'kubejs:golem_bow_mould',
      { item: 'minecraft:bow' },
      { item: 'minecraft:iron_block' },
    );

    event.shaped('kubejs:golem_axe_mould', ['TTC', 'TSC', 'CSC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_sword_mould', ['CTC', 'CTC', 'CSC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_spear_mould', ['CTT', 'CST', 'SCC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_bow_mould', ['CTC', 'TSC', 'CTC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_helmet_template', ['TCT', 'CSC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_chestplate_template', ['CSC', 'TCT', 'CCC'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_leggings_template', ['TCT', 'CSC', 'C C'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
    event.shaped('kubejs:golem_boots_template', ['CSC', 'T T'], {
      T: 'modulargolems:metal_golem_template',
      C: 'minecraft:clay_ball',
      S: '#c:rods/wooden',
    });
  });
})();
