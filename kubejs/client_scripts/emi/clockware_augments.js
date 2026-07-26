// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'kubejs', 'clockware_augments', [
    [
      /^clockware:arachnid_optics_.+$/,
      /^clockware:biopurifier_.+$/,
      /^clockware:optical_calibrator_.+$/,
      /^clockware:golem_arm_.+$/,
      /^clockware:reaper_blade_.+$/,
      /^clockware:feline_hand_.+$/,
      /^clockware:projectile_launcher_.+$/,
      /^clockware:kinetic_actuator_.+$/,
      /^clockware:jet_ankle_.+$/,
      /^clockware:hydrothruster_.+$/,
      /^clockware:shock_absorber_.+$/,
      /^clockware:obsidian_core_.+$/,
      /^clockware:clockwork_heart_.+$/,
      /^clockware:buoyancy_chamber_.+$/,
      /^clockware:thermal_regulator_.+$/,
    ],
  ]);
});
