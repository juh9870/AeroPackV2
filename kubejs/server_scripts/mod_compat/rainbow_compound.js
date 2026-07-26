// priority: 0

REG.yeetItem([
  'rainbowcompound:integrated_circuit',
  'rainbowcompound:obsidianite_bow',
  'rainbowcompound:home_magic_mirror',
  'rainbowcompound:shadow_mechanism',
  'rainbowcompound:radiance_mechanism',
  'rainbowcompound:shadow_resonant_assembly',
  'rainbowcompound:radiance_resonant_assembly',
  'rainbowcompound:shadow_ring',
  'rainbowcompound:radiance_ring',
  'rainbowcompound:honeyed_porkchop',
  'rainbowcompound:rainbow_apple',
  'rainbowcompound:ender_quartz',
  'rainbowcompound:polished_ender_quartz',
  'rainbowcompound:lapis_sheet',
]);

REG.addTag('c:ingots', [
  'rainbowcompound:rainbow_compound',
  'rainbowcompound:strange_colored_ingot',
  'rainbowcompound:blazeite_ingot',
  'rainbowcompound:chorusite_ingot',
  'rainbowcompound:enderite_ingot',
  'rainbowcompound:frostite_ingot',
  'rainbowcompound:slimeite_ingot',
  'rainbowcompound:glowstoneite_ingot',
  'rainbowcompound:netherwartite_ingot',
  'rainbowcompound:warpedite_ingot',
  'rainbowcompound:obsidianite_ingot',
  'rainbowcompound:netherstar_ingot',
]);

REG.addTag('c:plates', ['rainbowcompound:shadow_steel_sheet', 'rainbowcompound:refined_radiance_sheet']);

REG.addTag('kubejs:elytra', [
  'rainbowcompound:obsidianite_elytra',
  'rainbowcompound:dynamic_elytra_radiance',
  'rainbowcompound:dynamic_elytra_feather',
  'rainbowcompound:dynamic_elytra_fire',
  'rainbowcompound:dynamic_elytra_ice',
  'rainbowcompound:dynamic_elytra_66ccff',
  'rainbowcompound:dynamic_elytra_ender',
  'rainbowcompound:dynamic_elytra_slime',
  'rainbowcompound:dynamic_elytra_rainbow',
  'rainbowcompound:dynamic_elytra_flandre',
]);

REG.addTag('minecraft:swords', [
  'rainbowcompound:shadow_steel_sword',
  'rainbowcompound:rainbow_sword',
  'rainbowcompound:refined_radiance_scythes',
  'rainbowcompound:obsidianite_sword',
]);

REG.yeetRecipeFilter({
  id: 'rainbowcompound:create_mixing/enchanted_golden_apple',
});

ServerEvents.recipes((event) => {
  // event.replaceInput(
  // 	{ input: "rainbowcompound:integrated_circuit" },
  // 	"rainbowcompound:integrated_circuit",
  // 	"create_connected:control_chip",
  // );
  // event.shaped()
});
