// priority: 0

StartupEvents.registry('fluid', (event) => {
  event
    .create('enderic_acid', 'kubejs:thin')
    .tint(0x8d638d)
    // .bucketColor(0x8d638d)
    .displayName('Enderic Acid')
    // .noBucket()
    .noBlock();

  event
    .create('spent_enderic_acid', 'kubejs:thin')
    .tint(0x339786)
    // .bucketColor(0x339786)
    .displayName('Spent Enderic Acid')
    // .noBucket()
    .noBlock();

  event
    .create('molten_iron_ore', 'kubejs:thick')
    .tint(0xf32d06)
    // .bucketColor(0xf32d06)
    .displayName('Molten Iron Ore')
    // .noBucket()
    .noBlock();

  event
    .create('molten_gold_ore', 'kubejs:thick')
    .tint(0xa47129)
    // .bucketColor(0xa47129)
    .displayName('Molten Gold Ore')
    // .noBucket()
    .noBlock();

  event
    .create('molten_copper_ore', 'kubejs:thick')
    .tint(0xff9202)
    // .bucketColor(0xff9202)
    .displayName('Molten Copper Ore')
    // .noBucket()
    .noBlock();

  event
    .create('molten_zinc_ore', 'kubejs:thick')
    .tint(0xb4b7c0)
    // .bucketColor(0xb4b7c0)
    .displayName('Molten Zinc Ore')
    // .noBucket()
    .noBlock();

  // event
  //   .create("liquid_rose_quartz")
  //   .tint(0xf44471)
  // .bucketColor(0xf44471)
  //   .displayName("Liquid Rose Quartz")
  //   // .noBucket()
  //   .noBlock();
});

StartupEvents.registry('block', (event) => {
  /**
   *
   * @param {string} name
   * @param {"solid" | "cutout" | "cutout_mipped" | "translucent"} layer
   * @returns
   */
  let machine = (name, layer) => {
    let id = name.toLowerCase();
    return event
      .create(id + '_machine', 'kubejs:cardinal')
      .soundType('lantern')
      .hardness(3.0)
      .tagBlock(['mineable/pickaxe', 'create:wrench_pickup'])
      .requiresTool(true)
      .displayName(name + ' Machine')
      .notSolid()
      .renderType(layer)
      .redstoneConductor(false);
  };

  machine('Andesite', 'solid').tagBlock(['mineable/axe']).box(0, 0, 3, 16, 16, 16).box(3, 14, 3, 13, 18, 17);
  machine('Brass', 'translucent')
    .tagBlock(['mineable/axe'])
    .box(0, 0, 0, 16, 4, 16)
    .box(0, 0, 3, 16, 10, 13)
    .box(8, 3, 4, 16, 16, 16)
    .box(1, 10, 5, 7, 21, 11);
  machine('Copper', 'cutout')
    .tagBlock(['mineable/axe'])
    .box(0, 0, 0, 16, 4, 16)
    .box(1.9, 2, -2, 14.9, 10, 10)
    .box(6, 4, 6, 16, 20, 16)
    .box(0, 4, 6, 10, 24, 16);
  machine('Locomotion', 'cutout')
    .tagBlock(['mineable/axe'])
    .box(0, 0, 0, 16, 3, 16)
    .box(0, 3, 0, 12, 16, 8)
    .box(0, 3, 8, 10, 14, 16)
    .box(12, 3, 1, 16, 10, 16);
  machine('Logistics', 'translucent')
    .box(0, 0, 1, 16, 2, 15)
    .box(1, 2, 7, 14, 14, 15)
    .box(0, 2, 0, 7, 9, 12)
    .box(10, 0, 8, 16, 11, 16)
    .box(7.5, 14, 8.5, 12.5, 21, 13.5);
  machine('Sentient', 'cutout');
  machine('Optical', 'cutout');
});

StartupEvents.registry('item', (event) => {
  event.create('half_of_the_tube').displayName('Half Of The Tube');
  event.create('kubejs:drill_head').displayName('Drill Head');
  event.create('mechanical_elbow').displayName('Mechanical Elbow');
  event.create('mechanical_palm', 'kubejs:sword').displayName('Mechanical Palm').attackDamageBaseline(10.0);
  event.create('mechanical_shoulder').displayName('Mechanical Shoulder');
});
