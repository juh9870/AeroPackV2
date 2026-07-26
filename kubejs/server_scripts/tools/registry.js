// priority: 0

// T0
TOOLS.newMaterial('wood', {
  tier: '0',
  template: null,
  material: { tag: 'minecraft:planks' },
  recycleResults: [['createdieselgenerators:wood_chip', 7, 0.5]],
  idTemplate: 'minecraft:wooden_$0',
  keepCrafting: true,
  nameMapping: {
    bow: 'minecraft:bow',
  },
});
// T1
TOOLS.newMaterial('stone', {
  tier: '1',
  template: 'kubejs:stone_upgrade_smithing_template',
  material: { tag: 'minecraft:stone_tool_materials' },
  recycleResults: [['minecraft:gravel', 1, 0.5]],
  idTemplate: 'minecraft:stone_$0',
  keepCrafting: true,
});
TOOLS.newMaterial('leather', {
  tier: '1',
  template: null,
  material: { tag: 'c:leathers' },
  recycleResults: [['minecraft:leather', 1, 0.5]],
  idTemplate: 'minecraft:leather_$0',
  keepCrafting: true,
});
// T1+
TOOLS.newMaterial('copper', {
  tier: '1+',
  template: 'kubejs:copper_upgrade_smithing_template',
  material: { item: 'minecraft:copper_ingot' },
  recycleResults: [['minecraft:copper_ingot', 1, 0.5]],
  idTemplate: 'minecraft:copper_$0',
  keepCrafting: true,
});
TOOLS.newMaterial('chainmail', {
  tier: '1+',
  template: null,
  material: { item: 'minecraft:chain' },
  recycleResults: [['minecraft:chain', 1, 0.5]],
  idTemplate: 'minecraft:chainmail_$0',
  keepCrafting: true,
});
// T2
TOOLS.newMaterial('iron', {
  tier: '2',
  template: 'apotheosis:iron_upgrade_smithing_template',
  material: { item: 'minecraft:iron_ingot' },
  recycleResults: [['minecraft:iron_ingot', 1, 0.5]],
  idTemplate: 'minecraft:iron_$0',
  nameMapping: {
    golem_axe: 'modulargolems:iron_golem_axe',
    golem_spear: 'modulargolems:iron_golem_spear',
    golem_sword: 'modulargolems:iron_golem_sword',
    golem_bow: 'modulargolems:iron_mecha_bow',
    golem_helmet: 'modulargolems:roman_guard_helmet',
    golem_chestplate: 'modulargolems:roman_guard_chestplate',
    golem_leggings: 'modulargolems:roman_guard_shinguard',
  },
  keepCrafting: true,
});
TOOLS.newMaterial('gold', {
  tier: '2',
  template: 'apotheosis:gold_upgrade_smithing_template',
  material: { item: 'minecraft:gold_ingot' },
  recycleResults: [['minecraft:gold_ingot', 1, 0.5]],
  idTemplate: 'minecraft:golden_$0',
  keepCrafting: true,
});
// T3
TOOLS.newMaterial('diamond', {
  tier: '3',
  template: 'apotheosis:diamond_upgrade_smithing_template',
  material: { item: 'minecraft:diamond' },
  recycleResults: [['minecraft:diamond', 1, 0.5]],
  idTemplate: 'minecraft:diamond_$0',
  nameMapping: {
    golem_axe: 'modulargolems:diamond_golem_axe',
    golem_spear: 'modulargolems:diamond_golem_spear',
    golem_sword: 'modulargolems:diamond_golem_sword',
    golem_helmet: 'modulargolems:wind_spirit_helmet',
    golem_chestplate: 'modulargolems:wind_spirit_chestplate',
    golem_leggings: 'modulargolems:wind_spirit_shinguard',
    golem_boots: 'modulargolems:wind_spirit_boots',
  },
});
// T3*
TOOLS.newMaterial('totemic_gold', {
  tier: '3*',
  template: 'kubejs:totemic_gold_upgrade_smithing_template',
  recycleResults: [
    ['l2complements:totemic_gold_ingot', 1],
    ['minecraft:emerald', 2, 0.5, 0.25],
  ],
  material: { item: 'l2complements:totemic_gold_ingot' },
  idTemplate: 'l2complements:totemic_gold_$0',
});
TOOLS.newMaterial('poseidite', {
  tier: '3*',
  template: 'kubejs:poseidite_upgrade_smithing_template',
  material: { item: 'l2complements:poseidite_ingot' },
  recycleResults: [
    ['l2complements:poseidite_ingot', 1],
    ['minecraft:prismarine_crystals', 2, 0.5, 0.25],
  ],
  idTemplate: 'l2complements:poseidite_$0',
});
TOOLS.newMaterial('shulkerate', {
  tier: '3*',
  template: 'kubejs:shulkerate_upgrade_smithing_template',
  material: { item: 'l2complements:shulkerate_ingot' },
  recycleResults: [
    ['l2complements:shulkerate_ingot', 1],
    ['minecraft:chorus_flower', 2, 0.5, 0.25],
  ],
  idTemplate: 'l2complements:shulkerate_$0',
});
TOOLS.newMaterial('eternium', {
  tier: '3*',
  template: 'l2complements:eternal_upgrade_smithing_template',
  material: { item: 'l2complements:eternium_ingot' },
  recycleResults: [
    ['l2complements:eternium_ingot', 1],
    ['minecraft:obsidian', 4],
    ['l2complements:explosion_shard', 0.5],
  ],
  idTemplate: 'l2complements:eternium_$0',
});
// T3+
TOOLS.newMaterial('obsidianite', {
  tier: '3+',
  template: 'rainbowcompound:obsidianite_upgrade_kit',
  material: { item: 'rainbowcompound:obsidianite_ingot' },
  recycleResults: [
    ['rainbowcompound:obsidianite_ingot', 1, 0.5],
    ['minecraft:diamond', 0.25],
  ],
  idTemplate: 'rainbowcompound:obsidianite_$0',
});
// T4
TOOLS.newMaterial('netherite', {
  tier: '4',
  template: 'minecraft:netherite_upgrade_smithing_template',
  material: { item: 'minecraft:netherite_ingot' },
  recycleResults: [
    ['minecraft:netherite_ingot', 1],
    ['minecraft:diamond', 0.5],
  ],
  idTemplate: 'minecraft:netherite_$0',
  nameMapping: {
    golem_axe: 'modulargolems:netherite_golem_axe',
    golem_spear: 'modulargolems:netherite_golem_spear',
    golem_sword: 'modulargolems:netherite_golem_sword',
    golem_bow: 'modulargolems:netherite_mecha_bow',
    golem_helmet: 'modulargolems:barbaric_vanguard_helmet',
    golem_chestplate: 'modulargolems:barbaric_vanguard_chestplate',
    golem_leggings: 'modulargolems:barbaric_vanguard_shinguard',
    golem_boots: 'modulargolems:barbaric_vanguard_boots',
  },
});
// T4+
TOOLS.newMaterial('shadow_steel', {
  tier: '4+',
  template: 'kubejs:shadow_steel_upgrade_smithing_template',
  material: { item: 'create:shadow_steel' },
  recycleResults: [
    ['create:shadow_steel', 1],
    ['minecraft:end_stone', 1, 0.5],
    ['minecraft:obsidian', 1, 0.5],
  ],
  idTemplate: 'rainbowcompound:shadow_steel_$0',
  nameMapping: { hoe: 'rainbowcompound:shadow_steel_mattock' },
});
// T4*
TOOLS.newMaterial('refined_radiance', {
  tier: '4*',
  template: 'kubejs:refined_radiance_upgrade_smithing_template',
  material: { item: 'create:refined_radiance' },
  recycleResults: [
    ['create:refined_radiance', 1],
    ['minecraft:end_stone', 1, 0.5],
    ['minecraft:glowstone', 2, 0.5],
  ],
  idTemplate: 'rainbowcompound:refined_radiance_$0',
  nameMapping: { sword: 'rainbowcompound:refined_radiance_scythes' },
});
// T5
TOOLS.newMaterial('sculkium', {
  tier: '5',
  template: 'kubejs:sculkium_upgrade_smithing_template',
  material: { item: 'l2complements:sculkium_ingot' },
  recycleResults: [
    ['l2complements:sculkium_ingot', 1],
    ['minecraft:sculk', 1, 0.5],
    ['minecraft:bone_block', 2, 0.5],
  ],
  idTemplate: 'l2complements:sculkium_$0',
  nameMapping: {
    golem_sword: 'golemdungeons:sculk_golem_scythe',
  },
});
TOOLS.newMaterial('rainbow', {
  tier: '5',
  template: 'rainbowcompound:rainbow_upgrade_kit',
  material: { item: 'rainbowcompound:rainbow_compound' },
  recycleResults: [
    ['rainbowcompound:rainbow_compound', 1, 0.5],
    ['rainbowcompound:obsidianite_ingot', 0.5],
    ['minecraft:diamond', 0.5],
  ],
  idTemplate: 'rainbowcompound:rainbow_$0',
});
