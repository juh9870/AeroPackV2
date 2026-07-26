// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'modulargolems', 'golem_config_card', [
    '#modulargolems:config_card',
    [
      'modulargolems:target_filter_name',
      'modulargolems:target_filter_type',
      'modulargolems:target_filter_uuid',
      'modulargolems:target_filter_default',
    ],
  ]);
  EMI.add(event, 'modulargolems', 'golem_parts', ['#modulargolems:parts']);
  EMI.add(event, 'modulargolems', 'golem_facade', ['modulargolems:golem_facade']);
  EMI.add(event, 'modulargolems', 'golem_holders', ['#modulargolems:holders']);
  EMI.add(event, 'modulargolems', 'golem_upgrades', [
    [
      'modulargolems:add_1_slot',
      'modulargolems:add_100_slot',
      'modulargolems:empty_upgrade',
      'modulargolems:netherite_expansion_template',
      'modulargolems:diamond_expansion_template',
      'golemdungeons:resistance_upgrade',
      'golemdungeons:reforge_upgrade',
      'modulargolems:mechanical_arm',
    ],
    '#modulargolems:upgrades',
  ]);
});
