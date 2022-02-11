// 🚀 Instantiate

const map = new Map([
  [1, "one"],
  [2, "two"],
]);

const object = new Object({
  1: "one",
  2: "two",
});

console.log({ map, object });

// 🚀 Set

map.set(3, "three");
object[3] = "three";
console.log({ map, object });

// 🚀 Get

console.log("map get: ", map.get(1));
console.log("object get:", object[1]);

// 🚀 Delete an item by key

map.delete(3);
delete object[3];
console.log({ map, object });

// 🚀 Keys

console.log("map keys: ", map.keys());
console.log("object keys: ", Object.keys(object));

// 🚀 Has

console.log("map has: ", map.has(1));
console.log("object has: ", 1 in object);
console.log("object has: ", object.hasOwnProperty(1));
console.log("map has: ", map.has(3));
console.log("object has: ", object.hasOwnProperty(3));

// 🚀 Values

console.log("map values: ", map.values());
console.log("object values: ", Object.values(object));

// 🚀 Entries

console.log("map entries: ", map.entries());
console.log("object entries: ", Object.entries(object));

// 🚀 Size

console.log("map size: ", map.size);
console.log("object size: ", Object.keys(object).length);

// 🚀 Iteration with for...of

for (const [key, value] of map) {
  console.log(`map ${key}: ${value}`);
}

for (const [key, value] of Object.entries(object)) {
  console.log(`object ${key}: ${value}`);
}

// 🚀 Iteration with forEach

map.forEach((value, key) => {
  console.log(`map ${key}: ${value}`);
});

Object.entries(object).forEach(([key, value]) => {
  console.log(`object ${key}: ${value}`);
});

// 🚀 Swap Keys and Values

const swapMap = Array.from(map).reduce((acc, [key, value]) => {
  acc.set(value, key);
  return acc;
}, new Map());

console.log("swap map: ", swapMap);

const swapObject = Object.entries(object).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

console.log("swap object: ", swapObject);
