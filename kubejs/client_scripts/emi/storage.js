// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'kubejs', 'backpacks', [/^sophisticatedbackpacks:.*backpack$/]);
  EMI.add(event, 'kubejs', 'backpack_upgrade', [
    '#sophisticatedbackpacks:upgrade',
    'sophisticatedbackpacks:upgrade_base',
  ]);

  EMI.add(event, 'kubejs', 'framed_drawer', [/^functionalstorage:.*framed_.+$/]);
  EMI.add(event, 'kubejs', 'fluid_drawer', [/^functionalstorage:.*fluid_.+$/]);
  EMI.add(event, 'kubejs', 'drawer_1x1', [/^everycomp:fs\/.+\/.+_1$/, /^functionalstorage:(.*[o|c|w|j].*)_1$/]);
  EMI.add(event, 'kubejs', 'drawer_1x2', [/^everycomp:fs\/.+\/.+_2$/, /^functionalstorage:(.*[o|c|w|j].*)_2$/]);
  EMI.add(event, 'kubejs', 'drawer_2x2', [/^everycomp:fs\/.+\/.+_4$/, /^functionalstorage:(.*[o|c|w|j].*)_4$/]);
  EMI.add(event, 'kubejs', 'drawer_upgrade', [
    'functionalstorage:copper_upgrade',
    'functionalstorage:gold_upgrade',
    'functionalstorage:diamond_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:iron_downgrade',
    'functionalstorage:max_storage_upgrade',
    'functionalstorage:collector_upgrade',
    'functionalstorage:puller_upgrade',
    'functionalstorage:pusher_upgrade',
    'functionalstorage:void_upgrade',
    'functionalstorage:redstone_upgrade',
    'functionalstorage:creative_vending_upgrade',
    'functionalstorage:dripping_upgrade',
    'functionalstorage:water_generator_upgrade',
    'functionalstorage:obsidian_upgrade',
  ]);
});
