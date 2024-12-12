// Set Methods with Explanations and Examples

// 1. Set.prototype.add(value)
// Description: Appends a new element with a specified value to the end of a Set.
const set1 = new Set();
set1.add(1);
set1.add(2);
console.log(set1); // Output: Set { 1, 2 }

// 2. Set.prototype.clear()
// Description: Removes all elements from a Set.
const set2 = new Set([1, 2, 3]);
set2.clear();
console.log(set2); // Output: Set {}

// 3. Set.prototype.delete(value)
// Description: Removes the specified element from a Set.
const set3 = new Set([1, 2, 3]);
set3.delete(2);
console.log(set3); // Output: Set { 1, 3 }

// 4. Set.prototype.entries()
// Description: Returns a new Iterator object that contains an array of [value, value] for each element in the Set.
const set4 = new Set([1, 2, 3]);
for (let entry of set4.entries()) {
  console.log(entry); // Output: [ 1, 1 ], [ 2, 2 ], [ 3, 3 ]
}

// 5. Set.prototype.forEach(callbackFn, thisArg)
// Description: Executes a provided function once for each value in the Set.
const set5 = new Set([1, 2, 3]);
set5.forEach(value => console.log(value)); // Output: 1 2 3

// 6. Set.prototype.has(value)
// Description: Returns a boolean indicating whether an element with the specified value exists in the Set.
const set6 = new Set([1, 2, 3]);
console.log(set6.has(2)); // Output: true
console.log(set6.has(4)); // Output: false

// 7. Set.prototype.keys()
// Description: Returns a new Iterator object that contains the values for each element in the Set.
const set7 = new Set([1, 2, 3]);
for (let key of set7.keys()) {
  console.log(key); // Output: 1 2 3
}

// 8. Set.prototype.values()
// Description: Returns a new Iterator object that contains the values for each element in the Set.
const set8 = new Set([1, 2, 3]);
for (let value of set8.values()) {
  console.log(value); // Output: 1 2 3

// 9. Set.prototype[@@iterator]()
// Description: Returns a new Iterator object that contains the values for each element in the Set.
const set9 = new Set([1, 2, 3]);
for (let value of set9) {
  console.log(value); // Output: 1 2 3
}}
