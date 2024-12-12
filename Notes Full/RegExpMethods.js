// RegExp Methods with Explanations and Examples

// 1. RegExp.prototype.test(str)
// Description: Executes the search for a match between a regular expression and a specified string. Returns true or false.
const regex1 = /hello/i;
console.log(regex1.test('Hello World')); // Output: true

// 2. RegExp.prototype.exec(str)
// Description: Executes a search for a match in a specified string. Returns a result array or null.
const regex2 = /hello/i;
console.log(regex2.exec('Hello World')); // Output: ['Hello', index: 0, input: 'Hello World', groups: undefined]

// 3. RegExp.prototype.toString()
// Description: Returns a string representing the regular expression.
const regex3 = /hello/i;
console.log(regex3.toString()); // Output: '/hello/i'

// 4. RegExp.prototype.compile()
// Description: (Deprecated) Recompiles the regular expression.
const regex4 = /hello/i;
regex4.compile(regex4);
console.log(regex4); // Output: /hello/i

// 5. RegExp.prototype.flags
// Description: Returns a string consisting of the flags of the regular expression.
const regex5 = /hello/gi;
console.log(regex5.flags); // Output: 'gi'

// 6. RegExp.prototype.global
// Description: Returns whether or not the "g" flag is used with the regular expression.
const regex6 = /hello/g;
console.log(regex6.global); // Output: true

// 7. RegExp.prototype.ignoreCase
// Description: Returns whether or not the "i" flag is used with the regular expression.
const regex7 = /hello/i;
console.log(regex7.ignoreCase); // Output: true

// 8. RegExp.prototype.multiline
// Description: Returns whether or not the "m" flag is used with the regular expression.
const regex8 = /^hello/m;
console.log(regex8.multiline); // Output: true

// 9. RegExp.prototype.source
// Description: Returns a string containing the source text of the regular expression.
const regex9 = /hello/i;
console.log(regex9.source); // Output: 'hello'

// 10. RegExp.prototype.sticky
// Description: Returns whether or not the "y" flag is used with the regular expression.
const regex10 = /hello/y;
console.log(regex10.sticky); // Output: true

// 11. RegExp.prototype.unicode
// Description: Returns whether or not the "u" flag is used with the regular expression.
const regex11 = /hello/u;
console.log(regex11.unicode); // Output: true
