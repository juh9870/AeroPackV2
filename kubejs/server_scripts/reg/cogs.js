// priority: 0

REG.cog('kubejs:tiny_cog/wooden', {
  base: 'gnkinetics:tiny_cogwheel',
  shaftless: 'gnkinetics:shaftless_tiny_cogwheel',
});
REG.cog('kubejs:cog/wooden', {
  base: 'create:cogwheel',
  shaftless: 'gnkinetics:shaftless_cogwheel',
  hollow: 'gnkinetics:hollow_cogwheel',
  extras: [
    'bits_n_bobs:small_flanged_cogwheel',
    'createadditionallogistics:lazy_cogwheel',
    'create_connected:crank_wheel',
    'create:hand_crank',
  ],
});
REG.cog('kubejs:large_cog/wooden', {
  base: 'create:large_cogwheel',
  shaftless: 'gnkinetics:shaftless_large_cogwheel',
  hollow: 'gnkinetics:hollow_large_cogwheel',
  extras: [
    'bits_n_bobs:large_flanged_cogwheel',
    'createadditionallogistics:lazy_large_cogwheel',
    'gnkinetics:chainable_cogwheel',
    'create_connected:large_crank_wheel',
  ],
});
REG.cog('kubejs:cog/stone', {
  base: 'gnkinetics:cogstone',
  shaftless: 'gnkinetics:shaftless_cogstone',
  parent: 'kubejs:cog/wooden',
  material: '#c:stones',
});
REG.cog('kubejs:cog/andesite', {
  base: 'gnkinetics:andesite_cogwheel',
  shaftless: 'gnkinetics:shaftless_andesite_cogwheel',
  parent: 'kubejs:cog/wooden',
  material: 'create:andesite_alloy',
});
REG.cog('kubejs:cog/industrial', {
  base: 'gnkinetics:industrial_gear',
  shaftless: 'gnkinetics:shaftless_industrial_gear',
  parent: 'kubejs:cog/wooden',
  material: 'create:industrial_iron_block',
});
REG.cog('kubejs:large_cog/industrial', {
  base: 'gnkinetics:large_industrial_gear',
  shaftless: 'gnkinetics:shaftless_large_industrial_gear',
  parent: 'kubejs:large_cog/wooden',
  material: 'create:industrial_iron_block',
});
REG.cog('kubejs:tiny_cog/brass', {
  base: 'gnkinetics:tiny_brass_gear',
  shaftless: 'gnkinetics:shaftless_tiny_brass_gear',
  parent: 'kubejs:tiny_cog/wooden',
  material: 'create:brass_ingot',
});
REG.cog('kubejs:cog/brass', {
  base: 'gnkinetics:brass_gear',
  shaftless: 'gnkinetics:shaftless_brass_gear',
  hollow: 'gnkinetics:hollow_brass_gear',
  parent: 'kubejs:cog/wooden',
  material: 'create:brass_ingot',
});
REG.cog('kubejs:large_cog/brass', {
  base: 'gnkinetics:large_brass_gear',
  shaftless: 'gnkinetics:shaftless_large_brass_gear',
  hollow: 'gnkinetics:hollow_large_brass_gear',
  parent: 'kubejs:large_cog/wooden',
  material: 'create:brass_ingot',
});
REG.cog('kubejs:cog/magnet', {
  base: 'gnkinetics:magnet_gear',
  parent: 'kubejs:cog/wooden',
  material: 'create:transmitter',
  consumeMaterial: true,
});
REG.cog('kubejs:large_cog/magnet', {
  base: 'gnkinetics:large_magnet_gear',
  parent: 'kubejs:large_cog/wooden',
  material: 'create:transmitter',
  consumeMaterial: true,
});
REG.cog('kubejs:cog/grindstone', {
  base: 'create_enchantment_industry:mechanical_grindstone',
  parent: 'kubejs:cog/wooden',
  material: 'minecraft:grindstone',
  consumeMaterial: true,
});
