// JavaScript Loops and Array Methods

// 1. for Loop
// Definition: The `for` loop is used to repeat a block of code a specific number of times.
// Usage: Use this loop when you know in advance how many times you want to execute a statement or a block of statements.
for (let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);
}

// 2. while Loop
// Definition: The `while` loop repeats a block of code as long as a specified condition is true.
// Usage: Use this loop when you want to repeat a block of code an unknown number of times, but until a condition is met.
let count = 0;
while (count < 5) {
    console.log(`while loop iteration: ${count}`);
    count++;
}

// 3. do...while Loop
// Definition: The `do...while` loop is similar to the `while` loop, but it ensures that the block of code is executed at least once before the condition is tested.
// Usage: Use this loop when you want to ensure the block of code runs at least once, regardless of the condition.
let number = 0;
do {
    console.log(`do...while loop iteration: ${number}`);
    number++;
} while (number < 5);

// 4. for...in Loop
// Definition: The `for...in` loop is used to iterate over the enumerable properties of an object (including inherited properties).
// Usage: Use this loop when you want to iterate over the properties of an object.
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`for...in loop key: ${key}, value: ${obj[key]}`);
    }
}

// 5. for...of Loop
// Definition: The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, sets, and more.
// Usage: Use this loop when you want to iterate over the values of an iterable object.
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(`for...of loop value: ${value}`);
}

// 6. Array.prototype.forEach
// Definition: Executes a provided function once for each array element.
// Usage: Use `forEach` when you need to perform an action on each element in an array without returning a new array.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((value, index) => {
    console.log(`forEach loop index: ${index}, value: ${value}`);
});

// Array Methods
// 7. Array.prototype.map()
// Definition: Creates a new array with the results of calling a provided function on every element in the array.
// Usage: Use `map` when you need to transform each element in an array.
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 8. Array.prototype.filter()
// Definition: Creates a new array with all elements that pass the test implemented by the provided function.
// Usage: Use `filter` when you need to select a subset of elements from an array based on a condition.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 9. Array.prototype.reduce()
// Definition: Executes a reducer function on each element of the array, resulting in a single output value.
// Usage: Use `reduce` when you need to accumulate values from an array into a single result.
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15

// 10. Array.prototype.find()
// Definition: Returns the value of the first element in the array that satisfies the provided testing function.
// Usage: Use `find` when you need to locate a single element in an array based on a condition.
const found = numbers.find(number => number > 3);
console.log(found); // 4

// 11. Array.prototype.some()
// Definition: Tests whether at least one element in the array passes the test implemented by the provided function.
// Usage: Use `some` when you need to check if any elements in an array meet a condition.
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // true

// 12. Array.prototype.every()
// Definition: Tests whether all elements in the array pass the test implemented by the provided function.
// Usage: Use `every` when you need to check if all elements in an array meet a condition.
const allPositive = numbers.every(number => number > 0);
console.log(allPositive); // true

// 13. Array.prototype.flat()
// Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Usage: Use `flat` to flatten nested arrays.
const nestedArray = [1, [2, [3, 4]], 5];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5]

// 14. Array.prototype.flatMap()
// Definition: First maps each element using a mapping function, then flattens the result into a new array.
// Usage: Use `flatMap` when you need to apply a function to each element, and then flatten the results into a new array.
const flatMapped = numbers.flatMap(number => [number, number * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// 15. Array.prototype.indexOf()
// Definition: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Usage: Use `indexOf` when you need to find the index of a specific element.
const index = numbers.indexOf(3);
console.log(index); // 2

// 16. Array.prototype.includes()
// Definition: Determines whether an array includes a certain value among its entries, returning true or false.
// Usage: Use `includes` when you need to check if an array contains a specific element.
const hasThree = numbers.includes(3);
console.log(hasThree); // true
