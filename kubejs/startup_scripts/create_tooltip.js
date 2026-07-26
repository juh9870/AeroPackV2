// priority: 0
const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier');
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier');
const $Palette = Java.loadClass('net.createmod.catnip.lang.FontHelper$Palette');

/**
 * @import {$FontHelper$Palette} from "@package/net/createmod/catnip/lang"
 */

/**
 *
 * @param {string} itemID
 * @param {$FontHelper$Palette} [palette]
 */
function ADD_TOOLTIP(itemID, palette) {
  palette = palette ?? $Palette.STANDARD_CREATE;
  $TooltipModifier.REGISTRY.register(
    /** @type {any} */ (itemID),
    new $ItemDescription(/** @type {any} */ (itemID), /** @type {any} */ (palette)),
  );
}

StartupEvents.postInit((event) => {
  (() => {
    const gearing = [
      'aeroworks:mechanical_servo',
      'aeroworks:stepper_servo',
      'create_connected:encased_chain_cogwheel',
      'create_connected:inverted_clutch',
      'create_connected:inverted_gearshift',
      'create_connected:kinetic_bridge',
      'create_connected:parallel_gearbox',
      'create:adjustable_chain_gearshift',
      'create:chain_conveyor',
      'create:clutch',
      'create:encased_chain_drive',
      'create:gearbox',
      'create:gearshift',
      'createadditionallogistics:flexible_shaft',
      'createcasing:andesite_automatic_clutch',
      'createcasing:andesite_configurable_gearbox',
      'simulated:analog_transmission',
      'simulated:directional_gearshift',
      'simulated:torsion_spring',
    ];

    for (const item of gearing) {
      ADD_TOOLTIP(item);
    }
  })();
});
