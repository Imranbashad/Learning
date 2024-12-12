// Number Methods with Explanations and Examples

// 1. Number.isFinite(value)
// Description: Determines whether the passed value is a finite number.
console.log(Number.isFinite(123)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// 2. Number.isInteger(value)
// Description: Determines whether the passed value is an integer.
console.log(Number.isInteger(123)); // Output: true
console.log(Number.isInteger(123.45)); // Output: false

// 3. Number.parseFloat(string)
// Description: Parses a string argument and returns a floating point number.
console.log(Number.parseFloat('3.14')); // Output: 3.14

// 4. Number.parseInt(string, radix)
// Description: Parses a string argument and returns an integer of the specified radix.
console.log(Number.parseInt('10', 2)); // Output: 2 (binary base)

// 5. Number.toFixed(digits)
// Description: Formats a number using fixed-point notation.
const num = 5.56789;
console.log(num.toFixed(2)); // Output: 5.57

// 6. Number.toPrecision(digits)
// Description: Formats a number to a specified length.
const num2 = 5.56789;
console.log(num2.toPrecision(4)); // Output: 5.568

// 7. Number.toExponential(fractionDigits)
// Description: Returns a string representing the number in exponential notation.
const num3 = 123456;
console.log(num3.toExponential(2)); // Output: 1.23e+5

// 8. Number.isNaN(value)
// Description: Determines whether the passed value is NaN.
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(123)); // Output: false

// 9. Number.isSafeInteger(value)
// Description: Determines whether the provided value is a number that is a safe integer.
console.log(Number.isSafeInteger(123)); // Output: true
console.log(Number.isSafeInteger(123.45)); // Output: false

// 10. Number.MAX_VALUE
// Description: Represents the largest positive finite value of the Number type.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 11. Number.MIN_VALUE
// Description: Represents the smallest positive finite value of the Number type.
console.log(Number.MIN_VALUE); // Output: 5e-324

// 12. Number.MAX_SAFE_INTEGER
// Description: Represents the maximum safe integer in JavaScript.
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

// 13. Number.MIN_SAFE_INTEGER
// Description: Represents the minimum safe integer in JavaScript.
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// 14. Number.EPSILON
// Description: The smallest interval between two representable numbers.
console.log(Number.EPSILON); // Output: 2.220446049250313e-16

// 15. Number.NaN
// Description: Special value representing "Not-a-Number".
console.log(Number.NaN); // Output: NaN

// 16. Number.POSITIVE_INFINITY
// Description: Special value representing positive infinity.
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 17. Number.NEGATIVE_INFINITY
// Description: Special value representing negative infinity.
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 18. Number.prototype.toString(radix)
// Description: Returns a string representing the specified Number object in the specified radix (base).
const num4 = 10;
console.log(num4.toString(2)); // Output: "1010" (binary representation)

// 19. Number.prototype.valueOf()
// Description: Returns the primitive value of the specified Number object.
const num5 = new Number(123);
console.log(num5.valueOf()); // Output: 123
