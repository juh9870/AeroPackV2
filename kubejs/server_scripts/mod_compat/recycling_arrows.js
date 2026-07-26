// priority: 0

ServerEvents.generateData('after_mods', (event) => {
  /**
   * @typedef {object} ArrowRecoveryItem
   * @property {RegistryTypes.Item} item
   * @property {number} [chance]
   * @property {"copy_data"} [function]
   */

  /**
   * @typedef {object} ArrowRecoveryResult
   * @property {number} weight
   * @property {RegistryTypes.Item} [results] uses this arrow drop table
   * @property {(ArrowRecoveryItem | RegistryTypes.Item)[]} [items] custom drop table
   */

  /**
   *
   * @param {RegistryTypes.Item} arrow
   * @param {ArrowRecoveryResult[]} results
   */
  function arrow(arrow, results) {
    let split = arrow.split(':');
    event.json(split[0] + ':recycling_arrows/' + split[1], /** @type {any} */ ({ results: results }));
  }

  /**
   *
   * @param {RegistryTypes.Item} arrowId
   * @param {{trash?: (ArrowRecoveryItem | RegistryTypes.Item)[], chance?: number}} [opts]
   */
  function canFail(arrowId, opts) {
    opts = opts ?? {};
    let chance = opts.chance ?? 0.25;
    let trash = opts.trash ?? [];

    if (chance === 0) {
      arrow(arrowId, [{ weight: 1, items: trash }]);
    } else {
      arrow(arrowId, [
        {
          weight: chance * 100,
          items: [arrowId],
        },
        {
          weight: (1 - chance) * 100,
          items: trash,
        },
      ]);
    }
  }

  canFail('minecraft:arrow');
  canFail('minecraft:tipped_arrow', { chance: 0, trash: ['minecraft:arrow'] });
  canFail('minecraft:spectral_arrow', { chance: 0, trash: ['minecraft:arrow'] });
  canFail('tolerable_creepers:mischief_arrow', { chance: 0, trash: ['minecraft:arrow'] });
  canFail('l2archery:starter_arrow');
  canFail('l2archery:copper_arrow');
  canFail('l2archery:iron_arrow');
  canFail('l2archery:gold_arrow');
  canFail('l2archery:obsidian_arrow');
  canFail('l2archery:blackstone_arrow');
  canFail('l2archery:quartz_arrow');
  canFail('l2archery:diamond_arrow');
  canFail('l2archery:destroyer_arrow');
  canFail('l2archery:tearing_arrow');
  canFail('l2archery:totemic_gold_arrow');
  canFail('l2archery:poseidite_arrow');
  canFail('l2archery:shulkerate_arrow');
  canFail('l2archery:sculkium_arrow');
  canFail('l2archery:eternium_arrow', { chance: 1 });
  canFail('l2archery:no_fall_arrow');
  canFail('l2archery:ender_arrow');
  canFail('l2archery:tnt_arrow_lv1');
  canFail('l2archery:tnt_arrow_lv2');
  canFail('l2archery:tnt_arrow_lv3');
  canFail('l2archery:fire_arrow_lv1');
  canFail('l2archery:fire_arrow_lv2');
  canFail('l2archery:frozen_arrow');
  canFail('l2archery:acid_arrow');
  canFail('l2archery:dispell_arrow');
  canFail('l2archery:wither_arrow');
  canFail('l2archery:storm_arrow');

  // arrow('minecraft:tipped_arrow', [
  //   {
  //     weight: 1,
  //     items: [{ item: 'minecraft:tipped_arrow', function: 'copy_data' }],
  //   },
  //   {
  //     weight: 3,
  //     results: 'minecraft:arrow',
  //   },
  // ]);
});
