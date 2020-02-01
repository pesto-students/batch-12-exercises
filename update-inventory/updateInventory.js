
function updateInventory(inventory1, inventory2) {
  const mapInventory1 = new Map(inventory1);
  const mapInventory2 = new Map(inventory2);
  // console.log(mapInventory1);
  // console.log(mapInventory2);
  const invertedMap = new Map();
  const invertedMap2 = new Map();
  for (const [key, value] of mapInventory1) {
    invertedMap.set(value, key);
  }
  for (const [key, value] of mapInventory2) {
    invertedMap2.set(value, key);
  }
  for (const [key, value] of invertedMap) {
    if (invertedMap2.has(key)) {
      const otherval = invertedMap2.get(key);
      const newval = value + otherval;
      invertedMap2.delete(key);
      invertedMap.set(key, newval);
    }
  }
  // console.log(invertedMap);
  // console.log(invertedMap2);
  const mergedMap = new Map([...invertedMap, ...invertedMap2]);
  // console.log(mergedMap);
  const invertMap = new Map();
  for (const [key, value] of mergedMap) {
    invertMap.set(value, key);
  }
  return Array.from(invertMap);
}


// updateInventory([
//   [21, 'Bowling Ball'],
//   [2, 'Dirty Sock'],
//   [1, 'Hair Pin'],
//   [5, 'Microphone'],
// ], [
//   [2, 'Hair Pin'],
//   [3, 'Half-Eaten Apple'],
//   [67, 'Bowling Ball'],
//   [7, 'Toothpaste'],
// ]);

export {
  updateInventory,
};
