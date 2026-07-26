// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'c', 'ender_eyes', ['minecraft:ender_eye', /^endrem:.+_eye$/]);
  EMI.add(event, 'c', 'plates', ['#c:plates']);
  EMI.add(event, 'kubejs', 'crushed_raw_materials', ['#create:crushed_raw_materials']);
  EMI.add(event, 'kubejs', 'elytra', ['#kubejs:elytra']);
  EMI.add(event, 'kubejs', 'smithing_template', ['#kubejs:smithing_template']);
  EMI.add(event, 'kubejs', 'potion_fluids', ['fluid:create:potion']);
  EMI.add(event, 'kubejs', 'functional_pipes', [
    '#kubejs:functional_pipes',
    'classicpipes:copper_pipe',
    'classicpipes:inverted_copper_pipe',
    'classicpipes:advanced_copper_pipe',
    'classicpipes:inverted_advanced_copper_pipe',
  ]);
  EMI.add(event, 'kubejs', 'functional_fluid_pipes', [
    '#kubejs:functional_fluid_pipes',
    'classicpipes:copper_fluid_pipe',
    'classicpipes:inverted_copper_fluid_pipe',
    'classicpipes:advanced_copper_fluid_pipe',
    'classicpipes:inverted_advanced_copper_fluid_pipe',
  ]);
  EMI.add(event, 'kubejs', 'networked_pipes', ['#kubejs:networked_pipes']);
  EMI.add(event, 'kubejs', 'wooden_pipes', ['#kubejs:wooden_pipes']);
  EMI.add(event, 'kubejs', 'wooden_fluid_pipes', ['#kubejs:wooden_fluid_pipes']);
  EMI.add(event, 'kubejs', 'mutant_skeleton_parts', [
    'mutantmonsters:mutant_skeleton_arms',
    'mutantmonsters:mutant_skeleton_limb',
    'mutantmonsters:mutant_skeleton_pelvis',
    'mutantmonsters:mutant_skeleton_rib',
    'mutantmonsters:mutant_skeleton_rib_cage',
    'mutantmonsters:mutant_skeleton_shoulder_pad',
    'mutantmonsters:mutant_skeleton_skull',
  ]);
});
