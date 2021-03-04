export const storage = (key, data) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
  return null;
};

export const isNumber = (value) => {
  const reg = /^\d+$/;
  return reg.test(value);
};

export const isObjectsDeepEqual = (a, b) => {
  if (a === b) return true;

  if (
    typeof a !== 'object'
    || typeof b !== 'object'
    || a == null
    || b == null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  let result = true;

  keysA.forEach((key) => {
    if (!keysB.includes(key)) {
      result = false;
    }

    if (typeof a[key] === 'function' || typeof b[key] === 'function') {
      if (a[key].toString() !== b[key].toString()) {
        result = false;
      }
    }

    if (!isObjectsDeepEqual(a[key], b[key])) {
      result = false;
    }
  });

  return result;
};

export const isEmptyObject = (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object;
