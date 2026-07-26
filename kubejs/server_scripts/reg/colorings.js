// priority: 0

REG.yeetRecipeFilter({ id: /^simulated:.*portable_engine.*$/ });
REG.coloring('kubejs:electric_motor', 'electroenergetics:$color$_electric_motor', { washingResult: 'red' });
REG.coloring('kubejs:portable_engine', 'simulated:$color$_portable_engine', {
  washingResult: 'red',
});
REG.coloring('kubejs:envelope', 'aeronautics:$color$_envelope', {
  batchSize: 8,
  washingResult: '-',
});
