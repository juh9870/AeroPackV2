// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.addTagged(event, 'belt');
  EMI.addTagged(event, 'redstone/circuits');
  EMI.addTagged(event, 'wires');
  EMI.addTagged(event, 'mechanism/andesite');
  EMI.addTagged(event, 'chassis');
  EMI.addTagged(event, 'filters');
  EMI.addTagged(event, 'dashpanel_modules');
  EMI.addTagged(event, 'aeroworks_modules');
  EMI.addTagged(event, 'transmission/head');
  EMI.add(event, 'kubejs', 'transmission/rod', [
    '#kubejs:transmission/rod',
    'aeronautics_utility_objects:creative_hydraulic_rod',
  ]);
  EMI.addTagged(event, 'nixie_tube');
  for (const material of [
    'brass',
    'copper',
    'railway',
    'shadow_steel',
    'refined_radiance',
    'creative',
    'industrial_iron',
    'weathered_iron',
  ]) {
    EMI.add(event, 'kubejs', material + '_encased_machinery', [
      /** @type {`#${RegistryTypes.ItemTag}`} */ ('#kubejs:encased_machinery/' + material),
    ]);
  }
  EMI.add(event, 'kubejs', 'andesite_encased_piping', ['#kubejs:encased_piping/andesite']);
  EMI.add(event, 'kubejs', 'brass_encased_piping', ['#kubejs:encased_piping/brass']);
  EMI.add(event, 'kubejs', 'zinc_encased_piping', ['#kubejs:encased_piping/zinc']);
});
