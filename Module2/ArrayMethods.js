/*
Basic Manipulation: push(), pop(), shift(), unshift(), splice(), slice()

Iteration: map(), forEach(), filter(), reduce(), reduceRight(), every(), some()

Searching: find(), findIndex(), includes(), indexOf(), lastIndexOf()

Utility: join(), concat(), sort(), reverse(), flat(), flatMap(), fill(), copyWithin()

Iterators: entries(), keys(), values()

Type Checking: isArray(), from(), of()

Locale: toLocaleString(), toString()
*/

// array-methods.js

// 1. push()
// Adds one or more elements to the end of an array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

// 2. pop()
// Removes the last element from an array.
fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]

// 3. shift()
// Removes the first element from an array.
fruits.shift();
console.log(fruits); // Output: ["banana"]

// 4. unshift()
// Adds one or more elements to the beginning of an array.
fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana"]

// 5. map()
// Creates a new array with the results of calling a function for every array element.
let numbers = [1, 2, 3];
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]

// 6. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2]

// 7. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 6

// 8. forEach()
// Executes a provided function once for each array element.
fruits.forEach(fruit => console.log(fruit));
// Output: apple, banana (each on a new line)

// 9. find()
// Returns the value of the first element in the array that satisfies the provided testing function.
let found = numbers.find(num => num > 2);
console.log(found); // Output: 3

// 10. includes()
// Determines whether an array contains a certain value.
console.log(fruits.includes("banana")); // Output: true

// 11. splice()
// Adds/removes items to/from an array.
fruits.splice(1, 1, "mango", "pineapple");
console.log(fruits); // Output: ["apple", "mango", "pineapple"]

// 12. slice()
// Returns a shallow copy of a portion of an array.
let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["mango", "pineapple"]

// 13. join()
// Joins all elements of an array into a string.
let result = fruits.join(", ");
console.log(result); // Output: "apple, mango, pineapple"

// 14. reverse()
// Reverses the order of the elements in an array.
fruits.reverse();
console.log(fruits); // Output: ["pineapple", "mango", "apple"]

// 15. sort()
// Sorts the elements of an array.
fruits.sort();
console.log(fruits); // Output: ["apple", "mango", "pineapple"]

// 16. some()
// Checks if at least one element in the array passes the test implemented by the provided function.
let someEven = numbers.some(num => num % 2 === 0);
console.log(someEven); // Output: true

// 17. every()
// Checks if all elements in the array pass the test implemented by the provided function.
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: false

// 18. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedNumbers = [1, [2, 3], [4, [5, 6]]];
let flatNumbers = nestedNumbers.flat(2);
console.log(flatNumbers); // Output: [1, 2, 3, 4, 5, 6]

// 19. flatMap()
// First maps each element using a mapping function, then flattens the result into a new array.
let doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled); // Output: [1, 2, 2, 4, 3, 6]

// 20. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function.
let index = numbers.findIndex(num => num > 2);
console.log(index); // Output: 2

// 21. fill()
// Fills all the elements of an array from a start index to an end index with a static value.
numbers.fill(0, 2, 4);
console.log(numbers); // Output: [1, 2, 0, 0]

// 22. copyWithin()
// Copies part of an array to another location in the same array and returns it.
numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 4);
console.log(numbers); // Output: [4, 2, 3, 4, 5]

// 23. entries()
// Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let iterator = fruits.entries();
for (let entry of iterator) {
    console.log(entry);
}
// Output: [0, "apple"], [1, "mango"], [2, "pineapple"]

// 24. keys()
// Returns a new Array Iterator that contains the keys for each index in the array.
let keys = fruits.keys();
for (let key of keys) {
    console.log(key);
}
// Output: 0, 1, 2

// 25. values()
// Returns a new Array Iterator object that contains the values for each index in the array.
let values = fruits.values();
for (let value of values) {
    console.log(value);
}
// Output: "apple", "mango", "pineapple"

// 26. reduceRight()
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
numbers = [1, 2, 3, 4];
let sumRight = numbers.reduceRight((total, num) => total + num);
console.log(sumRight); // Output: 10

// 27. toString()
// Converts the elements of an array to a string and returns the result.
console.log(numbers.toString()); // Output: "1,2,3,4"

// 28. concat()
// Merges two or more arrays.
let moreFruits = ["kiwi", "grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["apple", "mango", "pineapple", "kiwi", "grape"]

// 29. from()
// Creates a new Array instance from an array-like or iterable object.
let str = 'hello';
let arr = Array.from(str);
console.log(arr); // Output: ["h", "e", "l", "l", "o"]

// 30. isArray()
// Determines whether the passed value is an Array.
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray('hello')); // Output: false

// 31. of()
// Creates a new Array instance with a variable number of elements.
let numberArray = Array.of(1, 2, 3);
console.log(numberArray); // Output: [1, 2, 3]

// 32. lastIndexOf()
// Returns the last index at which a specified element can be found in the array, or -1 if it is not present.
numbers = [1, 2, 3, 1];
console.log(numbers.lastIndexOf(1)); // Output: 3

// 33. toLocaleString()
// Converts an array to a locale-specific string representation.
console.log(numbers.toLocaleString('en-US')); // Output: "1, 2, 3, 1"
