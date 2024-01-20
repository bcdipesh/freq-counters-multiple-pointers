// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.
// Examples:
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(keysArr, valuesArr) {
  // Create an empty object
  const result = {};

  // If the keysArr is empty return the empty object
  if (keysArr.length === 0) return result;

  // Create two index keysIndex and valuesIndex starting at 0 for keysArr and valuesArr
  let keysIndex = 0;
  let valuesIndex = 0;

  // Loop over all the elements of keysArr
  while (keysIndex < keysArr.length) {
    /**
     * Create an entry inside the empty object where key will be the current element of keysArr at keysIndex
     * and value will be the current element of valuesArr at valuesIndex
     * Note: Use null as a value if the valuesIndex is out of bounds for valuesArr
     */
    // Don't create new value for duplicate keys
    if (!result[keysArr[keysIndex]]) {
      result[keysArr[keysIndex]] = valuesArr[valuesIndex] || null;

      // Increase valuesIndex
      valuesIndex = valuesIndex + 1;
    }
    // Increase keysIndex
    keysIndex = keysIndex + 1;
  }

  // return the object
  return result;
}
