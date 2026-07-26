// priority: 0

ServerEvents.recipes((event) => {
  // Template recipes

  event.remove({ output: /apotheosis:.+_upgrade_smithing_template/ });

  event.shaped('kubejs:downgrade_template', ['BB', 'CG', 'BB'], {
    B: 'minecraft:nether_brick',
    G: 'minecraft:grindstone',
    C: 'minecraft:clay_ball',
  });

  event.shaped('kubejs:stone_upgrade_smithing_template', ['TC', 'CS'], {
    T: '#c:rods/wooden',
    C: '#minecraft:stone_tool_materials',
    S: '#c:strings',
  });
  event.shaped('kubejs:copper_upgrade_smithing_template', ['TC', 'CS'], {
    T: '#c:rods/wooden',
    C: '#c:ingots/copper',
    S: '#c:strings',
  });
  event.shaped('apotheosis:iron_upgrade_smithing_template', ['SIS', 'IBI', 'BBB'], {
    B: '#c:stones',
    I: '#c:ingots/iron',
    S: '#c:strings',
  });
  event.shaped('apotheosis:gold_upgrade_smithing_template', ['SIS', 'IBI', 'BBB'], {
    B: '#c:stones',
    I: '#c:ingots/gold',
    S: '#c:strings',
  });
  event.shaped('apotheosis:diamond_upgrade_smithing_template', ['BBB', 'DBD', 'BBB'], {
    B: ['minecraft:deepslate', 'minecraft:blackstone'],
    D: '#c:gems/diamond',
  });
  event.shaped('kubejs:totemic_gold_upgrade_smithing_template', ['GEG', 'EOE', 'GEG'], {
    G: '#c:ingots/gold',
    E: '#c:gems/emerald',
    O: 'minecraft:potion[potion_contents={potion:"minecraft:regeneration"}]',
  });
  event.shaped('kubejs:poseidite_upgrade_smithing_template', ['GEG', 'EOE', 'GEG'], {
    G: 'minecraft:dark_prismarine',
    E: '#c:gems/prismarine',
    O: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:depth_strider":1}}]',
  });
  event.shaped('kubejs:shulkerate_upgrade_smithing_template', ['GEG', 'EOE', 'GEG'], {
    G: '#c:plates/iron',
    E: 'minecraft:chorus_flower',
    O: 'create:extendo_grip',
  });
  event.shaped('kubejs:sculkium_upgrade_smithing_template', ['BCB', 'SLS', 'BSB'], {
    C: 'minecraft:sculk_catalyst',
    B: 'minecraft:bone_block',
    S: 'minecraft:sculk',
    L: 'minecraft:bell',
  });
  event.shaped('kubejs:shadow_steel_upgrade_smithing_template', ['SES', 'ECE', 'SES'], {
    E: 'minecraft:end_stone',
    S: '#c:plates/obsidian',
    C: 'create:shadow_steel',
  });
  event.shaped('kubejs:refined_radiance_upgrade_smithing_template', ['SES', 'ECE', 'SES'], {
    E: 'minecraft:end_stone',
    S: 'minecraft:glowstone',
    C: 'create:refined_radiance',
  });
});
