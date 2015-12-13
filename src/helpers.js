/**
 * Helper immutable function to change the value inside an object,
 * it returns a new version of the object
 *
 * @param {{Object}} obj The original object
 * @param {{Array}} keys A list of array that define the path of the key to change
 * @param {{function}} cb A callback with the action to apply to the object Eg. (item) => item + 1
 * @return {*} A new Object
 */
export function objectReplaceDeep(obj, keys, cb) {
  let newObject = {};
  if (keys.length === 0) {
    return cb(obj);
  }
  Object.keys(obj).map((key) => {
    if (key === keys[0]) {
      newObject[key] = objectReplaceDeep(obj[key], keys.slice(1), cb);
    } else {
      newObject[key] = obj[key];
    }
  });
  return newObject;
}