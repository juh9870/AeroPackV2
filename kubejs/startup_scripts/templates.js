StartupEvents.registry('item', (event) => {
  /**
   *
   * @param {string} material
   */
  function template(material) {
    const id = material + '_upgrade_smithing_template';
    event.create(id).displayName('Smithing Template');
  }

  template('stone');
  template('copper');
  template('totemic_gold');
  template('poseidite');
  template('shulkerate');
  template('sculkium');
  template('refined_radiance');
  template('shadow_steel');

  event.create('downgrade_template').displayName('Smithing Template');

  event.create('golem_axe_mould').displayName('Golem Axe Mould');
  event.create('golem_spear_mould').displayName('Golem Spear Mould');
  event.create('golem_sword_mould').displayName('Golem Sword Mould');
  event.create('golem_bow_mould').displayName('Golem Bow Mould');

  event.create('golem_helmet_template').displayName('Golem Helmet Template');
  event.create('golem_chestplate_template').displayName('Golem Chestplate Template');
  event.create('golem_leggings_template').displayName('Golem Leggings Template');
  event.create('golem_boots_template').displayName('Golem Boots Template');
});
