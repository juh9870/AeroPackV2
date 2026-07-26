// priority: 1000

const assert = {
  param: (paramName, value, type) => {
    let err = _checkType(value, _parseTypedef(type));
    if (err) {
      throw new Error('bad value for parameter ' + paramName + ' - ' + err);
    }
  },

  type: (value, type) => {
    let err = _checkType(value, _parseTypedef(type));
    if (err) {
      throw new Error(err);
    }
  },
};

/**
 * @typedef TypeDef
 * @property {string} base
 * @property {TypeDef?} array
 * @property {boolean} optional
 * @property {string} display
 */

const TYPEDEF_CACHE = {};
/**
 *
 * @param {string} str
 * @returns {TypeDef}
 */
function _parseTypedef(str) {
  let res = TYPEDEF_CACHE[str];
  if (!res) {
    const parsed = /^([a-z]+)(\[\])?(\?)?$/.exec(str);
    if (!parsed) {
      throw new Error('Bad type string - ' + str);
    }
    res = {
      base: parsed[1],
      array: parsed[2] ? { base: parsed[1], array: null, optional: false, display: parsed[1] } : null,
      optional: !!parsed[3],
      display: str,
    };
    TYPEDEF_CACHE[str] = res;
  }
  return res;
}

/**
 *
 * @param {unknown} value
 * @param {TypeDef} expectedType
 * @returns {string|null}
 */
function _checkType(value, ty) {
  let valType = typeof value;
  switch (valType) {
    case 'object':
      if (value === null) {
        if (ty.optional) return null;
        else return 'got null where ' + ty.display + ' was expected';
      }
      if (ty.array) {
        if (!Array.isArray(value)) {
          return 'got object where ' + value + ' was expected';
        }

        for (let i = 0; i < value.length; i++) {
          let err = _checkType(value[i], ty.array);
          if (err) {
            return 'bas array element #' + i + ' - ' + err;
          }
        }
        return null;
      }
      if (ty.base === 'object') return null;
      else return 'got object where ' + value + ' was expected';
    case 'undefined':
      if (ty.optional) return null;
      else return 'got undefined where ' + ty.display + ' was expected';
    default:
      if (ty.base === valType) return null;
      else return 'got ' + valType + ' where ' + ty.display + ' was expected';
  }
}
