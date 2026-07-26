// priority: 0

/**
 * @typedef {"iron"|"gold"|"copper"|"zinc"} KnownMetalName
 */
/**
 * @typedef MetalSet
 * @property {KnownMetalName} name
 * @property {RegistryTypes.Item} ore
 * @property {RegistryTypes.Item} deepOre
 * @property {RegistryTypes.Item} raw
 * @property {RegistryTypes.Item} rawBlock
 * @property {RegistryTypes.Item} crushed
 * @property {RegistryTypes.Item} ingot
 * @property {RegistryTypes.Item} nugget
 * @property {RegistryTypes.Fluid} moltenOre
 */

/**
 *
 * @param {KnownMetalName} name
 * @param {string | null} [modid]
 * @param {Partial<MetalSet>} [overrides]
 * @returns {MetalSet}
 */
function metalSet(name, modid, overrides) {
  modid = modid ?? 'minecraft';
  overrides = overrides ?? {};
  return /** @type {MetalSet} */ (
    Object.assign(
      {
        name: name,
        ore: `${modid}:${name}_ore`,
        deepOre: `${modid}:deepslate_${name}_ore`,
        raw: `${modid}:raw_${name}`,
        rawBlock: `${modid}:raw_${name}_block`,
        crushed: `create:crushed_raw_${name}`,
        ingot: `${modid}:${name}_ingot`,
        nugget: `${modid}:${name}_nugget`,
        moltenOre: `kubejs:molten_${name}_ore`,
      },
      overrides,
    )
  );
}

const metals = [
  metalSet('iron'),
  metalSet('gold'),
  metalSet('copper', null, { nugget: 'create:copper_nugget' }),
  metalSet('zinc', 'create'),
];

const acid = 'kubejs:enderic_acid';
const spentAcid = 'kubejs:spent_enderic_acid';

const xpNugget = 'create:experience_nugget';

ServerEvents.tags('item', (event) => {
  event.removeAllTagsFrom('minecraft:copper_nugget');
});

ServerEvents.recipes((event) => {
  // strings
  event.recipes.create.crushing(
    [
      CreateItem.of(Item.of('minecraft:string', 2)),
      CreateItem.of('minecraft:string', 0.5),
      CreateItem.of('minecraft:string', 0.5),
    ],
    ['create:pulp'],
  );

  // drawers fix
  event.remove({ id: /functionalstorage:oak_\d/ });

  event.shaped('functionalstorage:oak_1', ['PPP', 'PCP', 'PPP'], {
    P: 'minecraft:oak_planks',
    C: '#c:chests/wooden',
  });
  event.shaped(Item.of('functionalstorage:oak_2', 2), ['PCP', 'PPP', 'PCP'], {
    P: 'minecraft:oak_planks',
    C: '#c:chests/wooden',
  });
  event.shaped(Item.of('functionalstorage:oak_4', 4), ['CPC', 'PPP', 'CPC'], {
    P: 'minecraft:oak_planks',
    C: '#c:chests/wooden',
  });

  // copper nug
  event.remove({ id: 'minecraft:copper_nugget' });
  event.replaceInput({ input: 'minecraft:copper_nugget' }, 'minecraft:copper_nugget', 'create:copper_nugget');
  event.replaceOutput({ output: 'minecraft:copper_nugget' }, 'minecraft:copper_nugget', 'create:copper_nugget');

  // metalworks
  event.recipes.create
    .mixing(
      [Fluid.of(acid, 2000), 'minecraft:gunpowder'],
      ['minecraft:popped_chorus_fruit', 'minecraft:slime_ball', Item.of('create:cinder_flour', 2)],
      60 * 20,
    )
    .heated();

  const transitionItem = 'minecraft:spider_eye';
  event.recipes.create
    .sequenced_assembly([Item.of('minecraft:ender_pearl')], 'minecraft:spider_eye', [
      event.recipes.create.filling([transitionItem], [transitionItem, Fluid.of(spentAcid, 100)]),
      event.recipes.create.pressing([transitionItem], [transitionItem]),
    ])
    .transitionalItem(transitionItem)
    .loops(4);

  event.remove({ id: /create:crushing\/raw_(iron|zinc|copper|gold)(_block)?/ });
  event.remove({
    id: /create:crushing\/(seepslate_)?(iron|zinc|copper|gold)(_ore)?/,
  });
  event.remove({ id: /create:splashing\/crushed_raw_(iron|zinc|copper|gold)/ });

  // x2.5 multiplier for netherite scrap by recursive crushing
  event.recipes.create.crushing(
    ['minecraft:netherite_scrap', CreateItem.of('minecraft:ancient_debris', 0.6)],
    [Ingredient.of('#c:ores/netherite_scrap')],
  );

  const byproducts = {
    iron: {
      weak: CreateItem.of('minecraft:redstone', 0.25),
      strong: CreateItem.of('minecraft:redstone', 1),
    },
    gold: {
      weak: CreateItem.of('minecraft:quartz', 0.5 / 3),
      strong: CreateItem.of('minecraft:quartz', 3 / 4),
    },
    copper: {
      weak: CreateItem.of('minecraft:clay_ball', 0.5 / 3),
      strong: CreateItem.of('minecraft:clay_ball', 3 / 4),
    },
    zinc: {
      weak: CreateItem.of('minecraft:gunpowder', 0.1),
      strong: CreateItem.of('minecraft:gunpowder', 2 / 3),
    },
  };

  for (const metal of metals) {
    // x1.25 milling
    event.recipes.create.milling(
      [Item.of(metal.crushed), CreateItem.of(metal.crushed, 0.25), CreateItem.of(xpNugget, 0.25)],
      [metal.raw],
    );
    // Crushing raw ore/block into crushed ore with x1.75 multiplier
    event.recipes.create.crushing(
      [Item.of(metal.crushed), CreateItem.of(metal.crushed, 0.75), CreateItem.of(xpNugget, 0.75)],
      [metal.raw],
    );
    event.recipes.create.crushing(
      [
        Item.of(metal.crushed, 9),
        CreateItem.of(Item.of(metal.crushed, 9), 0.75),
        CreateItem.of(Item.of(xpNugget, 9), 0.75),
      ],
      [metal.rawBlock],
    );
    // x1 crushing using press
    event.recipes.create.pressing([metal.crushed], [metal.raw]);

    // Washing crushed ore into nuggets with x1.33 multiplier
    event.recipes.create.splashing(
      [Item.of(metal.nugget, 9), CreateItem.of(Item.of(metal.nugget, 6), 0.5), byproducts[metal.name].weak],
      [metal.crushed],
    );

    // Mixing crushed ore with Enderic Acid to double them and make spent acid, x2 multiplier
    event.recipes.create
      .mixing([Item.of(metal.nugget, 9 * 2), Fluid.of(spentAcid, 100)], [metal.crushed, Fluid.of(acid, 100)])
      .heated();

    // Melting crushed ore or crushed ore into liquid. x1
    event.recipes.create.mixing([Fluid.of(metal.moltenOre, 128)], [metal.crushed]).heated();

    // Melting raw ores grants x1.5
    event.recipes.create.mixing([Fluid.of(metal.moltenOre, 128 * 1.5)], [metal.raw]).heated();

    event.recipes.create.mixing([Fluid.of(metal.moltenOre, 128 * 1.5 * 9)], [metal.rawBlock]).superheated();

    // Mixing molten ore with spent acid creates. slightly random x2 multiplier with weak subproduct
    event.recipes.create.mixing(
      [
        Item.of(metal.nugget, 9 + 6),
        CreateItem.of(Item.of(metal.nugget, 6), 0.5),
        Fluid.of('minecraft:water', 128),
        byproducts[metal.name].weak,
      ],
      [Fluid.of(metal.moltenOre, 128), Fluid.of(spentAcid, 128)],
    );

    // Solidifying, x1 but with high byproduct chance
    event.recipes.create.compacting(
      [Item.of(metal.nugget, 9), byproducts[metal.name].strong],
      [Fluid.of(metal.moltenOre, 128)],
    );
  }
});
