// priority: 0

// recipe-only removals - recipes are usually re-added elsewhere

REG.yeetRecipe('createdieselgenerators:large_diesel_engine');
REG.yeetRecipe('simulated:auger_cog');
REG.yeetRecipe('aeronautics:wooden_propeller');
REG.yeetRecipe('tracks:track_mount');
REG.yeetRecipe('tracks:small_suspension_track');
REG.yeetRecipe('bits_n_bobs:flywheel_bearing');
REG.yeetRecipe('create_connected:kinetic_battery');
REG.yeetRecipe('create_connected:item_silo');
REG.yeetRecipe('morered:hexidecrubrometer');
REG.yeetRecipe('createvintageneoforged:centrifuge');
REG.yeetRecipe('createvintageneoforged:curving_press');
REG.yeetRecipeFilter({
  id: 'create_connected:crafting/kinetics/fluid_vessel_from_conv',
});
REG.yeetRecipeFilter({ id: 'create_connected:fluid_vessel' });
REG.yeetRecipeFilter({ output: /^electroenergetics:.+_electric_motor$/ });

// complete item removal - should never be seen or crafted

REG.yeetItem('gnkinetics:cog_crank');
REG.yeetItem('gnkinetics:large_cog_crank');
REG.yeetItem('createvintageneoforged:iron_spring');
REG.yeetItem('createvintageneoforged:iron_rod');
REG.yeetItem('createvintageneoforged:laser_item');
REG.yeetItem('morered:soldering_table');
REG.yeetItem('create_connected:encased_chain_cogwheel');
REG.yeetItem('create_connected:item_silo');
REG.yeetItem('create_connected:item_silo');
REG.yeetItem('linktablet:tablet_case');
REG.yeetItem('linktablet:logic_board');
REG.yeetItem('linktablet:quartz_display');
REG.yeetItem('linktablet:clockwork_cell');
REG.yeetItem([
  'redstonepen:relay',
  'redstonepen:inverted_relay',
  'redstonepen:pulse_relay',
  'redstonepen:bistable_relay',
  'redstonepen:bridge_relay',
]);
REG.yeetItem(['pulsetech:pulse_module', 'pulsetech:protocol_module', 'pulsetech:storage_module']);
