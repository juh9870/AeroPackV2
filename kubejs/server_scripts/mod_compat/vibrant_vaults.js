REG.tagGroup('kubejs:vaults', [
  'create:item_vault',
  'create_vibrant_vaults:vertical_item_vault',
  'create_vibrant_vaults:basic_shipping_container',
  'create_vibrant_vaults:vertical_basic_shipping_container',
]);

REG.itemsFlip('create:item_vault', 'create_vibrant_vaults:vertical_item_vault');
REG.itemsFlip(
  'create_vibrant_vaults:basic_shipping_container',
  'create_vibrant_vaults:vertical_basic_shipping_container',
);

for (const color of ALL_COLORS) {
  REG.itemsFlip(
    /** @type {RegistryTypes.Item} */ ('create_vibrant_vaults:' + color + '_item_vault'),
    /** @type {RegistryTypes.Item} */ ('create_vibrant_vaults:' + color + '_vertical_item_vault'),
  );
  REG.itemsFlip(
    /** @type {RegistryTypes.Item} */ ('create_vibrant_vaults:' + color + '_basic_shipping_container'),
    /** @type {RegistryTypes.Item} */ ('create_vibrant_vaults:' + color + '_vertical_basic_shipping_container'),
  );
}

ServerEvents.recipes((event) => {
  event.recipes.create.splashing(
    ['create:package_frogport'],
    [Ingredient.of('#create_vibrant_vaults:vibrant_frogports')],
  );
  event.recipes.create.splashing(['create:stock_link'], [Ingredient.of('#create_vibrant_vaults:vibrant_stock_links')]);
  event.recipes.create.splashing(
    ['create:redstone_requester'],
    [Ingredient.of('#create_vibrant_vaults:vibrant_redstone_requesters')],
  );
  event.recipes.create.splashing(['create:packager'], [Ingredient.of('#create_vibrant_vaults:vibrant_packagers')]);
});
