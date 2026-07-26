// priority: 1000

/**
 * @template {unknown} T
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]}
 */
function concat(a, b) {
  let ret = [];
  for (const i of a) {
    ret.push(i);
  }
  for (const i of b) {
    ret.push(i);
  }
  return ret;
}
