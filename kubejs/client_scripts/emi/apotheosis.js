// priority: 0

ClientEvents.generateAssets('after_mods', (event) => {
  EMI.add(event, 'kubejs', 'apotheosis_charm', ['apotheosis:potion_charm']);
  EMI.add(event, 'kubejs', 'apotheosis_gem', ['apotheosis:gem']);
  EMI.add(event, 'kubejs', 'spawner_rune', [/^apotheosis:.*spawner.*_rune$/]);
  EMI.add(event, 'kubejs', 'apotheosis_tome', [/^apothic_enchanting:.+_tome/]);
  EMI.add(event, 'kubejs', 'apotheosis_bookshelf', [/^apothic_enchanting:.+shelf/]);
  EMI.add(event, 'kubejs', 'apotheosis_sigils', ['apotheosis:gem_fused_slate', /^apotheosis:sigil_.*/]);
  EMI.add(event, 'kubejs', 'apotheosis_materials', [
    '#apotheosis:rarity_materials',
    'apotheosis:gem_dust',
    'apotheosis:god_fused_pearl',
  ]);
});
