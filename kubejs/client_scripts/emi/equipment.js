// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'modulargolems', 'golem_equipment', [
    'golemdungeons:ancient_forge',
    'golemdungeons:flame_sword',
    'golemdungeons:sculk_golem_scythe',
    'golemdungeons:samurai_golem_helmet',
    'golemdungeons:samurai_golem_chestplate',
    'golemdungeons:samurai_golem_shinguard',
    'modulargolems:roman_guard_shinguard',
    'modulargolems:roman_guard_helmet',
    'modulargolems:roman_guard_chestplate',
    'modulargolems:roman_guard_shinguard',
    'modulargolems:wind_spirit_helmet',
    'modulargolems:wind_spirit_chestplate',
    'modulargolems:wind_spirit_shinguard',
    'modulargolems:wind_spirit_boots',
    'modulargolems:roman_guard_shinguard',
    'modulargolems:barbaric_vanguard_helmet',
    'modulargolems:barbaric_vanguard_chestplate',
    'modulargolems:barbaric_vanguard_boots',
    'modulargolems:barbaric_vanguard_shinguard',
    'modulargolems:beacon_boots',
    'modulargolems:iron_golem_spear',
    'modulargolems:diamond_golem_spear',
    'modulargolems:netherite_golem_spear',
    'modulargolems:iron_golem_axe',
    'modulargolems:diamond_golem_axe',
    'modulargolems:netherite_golem_axe',
    'modulargolems:iron_golem_sword',
    'modulargolems:diamond_golem_sword',
    'modulargolems:netherite_golem_sword',
    'modulargolems:golem_slicing_axe',
    'modulargolems:heavy_golem_spear',
    'modulargolems:iron_mecha_bow',
    'modulargolems:netherite_mecha_bow',
    'modulargolems:sonic_cannon',
    'modulargolems:beacon_cannon',
    'modulargolems:flame_thrower',
  ]);

  EMI.add(event, 'kubejs', 'arrow', ['#minecraft:arrows']);
  EMI.add(event, 'kubejs', 'archery_upgrade', ['l2archery:upgrade']);
  EMI.add(event, 'kubejs', 'helmets', ['#minecraft:head_armor']);
  EMI.add(event, 'kubejs', 'chestplates', ['#minecraft:chest_armor']);
  EMI.add(event, 'kubejs', 'leggings', ['#minecraft:leg_armor']);
  EMI.add(event, 'kubejs', 'boots', ['#minecraft:foot_armor']);
  EMI.add(event, 'kubejs', 'bundle', ['#minecraft:bundles']);
  EMI.add(event, 'kubejs', 'bows', ['#c:tools/bow']);
  EMI.add(event, 'kubejs', 'wands', [/^wands:.+_wand$/]);
  EMI.add(event, 'kubejs', 'totems', [
    'minecraft:totem_of_undying',
    'l2complements:totem_of_dream',
    'l2complements:totem_of_the_sea',
    'l2complements:eternal_totem_of_dream',
  ]);
});
