/*
Basic Operations: charAt(), charCodeAt(), fromCharCode(), concat(), includes(), indexOf(), lastIndexOf(), slice(), substring(), substr(), split()

Case Conversion: toLowerCase(), toUpperCase(), toLocaleLowerCase(), toLocaleUpperCase()

Whitespace Handling: trim(), trimStart(), trimEnd()

Search and Replace: replace(), replaceAll(), search(), match(), matchAll()

Padding: padStart(), padEnd()

Miscellaneous: repeat(), startsWith(), endsWith(), localeCompare(), normalize()

Deprecated/Legacy HTML Methods: anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()
*/

// string-methods.js

// 1. charAt()
// Returns the character at a specified index in a string.
let text = "hello";
console.log(text.charAt(1)); // Output: "e"

// 2. concat()
// Joins two or more strings and returns a new string.
let text1 = "Hello";
let text2 = "World";
let result = text1.concat(" ", text2);
console.log(result); // Output: "Hello World"

// 3. includes()
// Checks if a string contains a specified substring.
let greeting = "Hello World";
console.log(greeting.includes("World")); // Output: true

// 4. indexOf()
// Returns the position of the first occurrence of a specified value in a string.
console.log(greeting.indexOf("World")); // Output: 6

// 5. toLowerCase()
// Converts a string to lowercase letters.
let upperText = "HELLO WORLD";
console.log(upperText.toLowerCase()); // Output: "hello world"

// 6. toUpperCase()
// Converts a string to uppercase letters.
let lowerText = "hello world";
console.log(lowerText.toUpperCase()); // Output: "HELLO WORLD"

// 7. slice()
// Extracts a part of a string and returns it as a new string.
console.log(greeting.slice(0, 5)); // Output: "Hello"

// 8. split()
// Splits a string into an array of substrings.
console.log(greeting.split(" ")); // Output: ["Hello", "World"]

// 9. trim()
// Removes whitespace from both ends of a string.
let paddedText = "  Hello World  ";
console.log(paddedText.trim()); // Output: "Hello World"

// 10. replace()
// Replaces a specified value with another value in a string.
let newText = greeting.replace("World", "Everyone");
console.log(newText); // Output: "Hello Everyone"

// 11. substring()
// Extracts characters from a string, between two specified indices.
console.log(greeting.substring(1, 5)); // Output: "ello"

// 12. substr()
// Extracts parts of a string, beginning at a specified start position, and through the specified number of characters.
console.log(greeting.substr(1, 4)); // Output: "ello"

// 13. replaceAll()
// Replaces all occurrences of a string with another string.
let repeatText = "Hello Hello World";
let replacedText = repeatText.replaceAll("Hello", "Hi");
console.log(replacedText); // Output: "Hi Hi World"

// 14. padStart()
// Pads the current string with another string until the resulting string reaches the given length.
let numberText = "5";
console.log(numberText.padStart(2, "0")); // Output: "05"

// 15. padEnd()
// Pads the current string with another string until the resulting string reaches the given length.
console.log(numberText.padEnd(2, "0")); // Output: "50"

// 16. startsWith()
// Determines whether a string starts with the characters of a specified string.
console.log(greeting.startsWith("Hello")); // Output: true

// 17. endsWith()
// Determines whether a string ends with the characters of a specified string.
console.log(greeting.endsWith("World")); // Output: true

// 18. repeat()
// Constructs and returns a new string which contains the specified number of copies of the string on which it was called.
let repeated = "Hello".repeat(3);
console.log(repeated); // Output: "HelloHelloHello"

// 19. search()
// Executes a search for a match between a regular expression and this String object.
console.log(greeting.search("World")); // Output: 6

// 20. match()
// Retrieves the matches when matching a string against a regular expression.
let match = greeting.match(/World/);
console.log(match); // Output: ["World"]

// 21. fromCharCode()
// Converts Unicode values to characters.
let charText = String.fromCharCode(72, 101, 108, 108, 111);
console.log(charText); // Output: "Hello"

// 22. charCodeAt()
// Returns the Unicode of the character at a specified index.
console.log(greeting.charCodeAt(0)); // Output: 72

// 23. toLocaleLowerCase()
// Converts a string to lowercase letters, according to the host's current locale.
console.log(upperText.toLocaleLowerCase()); // Output: "hello world"

// 24. toLocaleUpperCase()
// Converts a string to uppercase letters, according to the host's current locale.
console.log(lowerText.toLocaleUpperCase()); // Output: "HELLO WORLD"

// 25. codePointAt()
// Returns a non-negative integer that is the Unicode code point value at the given position.
console.log(greeting.codePointAt(0)); // Output: 72

// 26. normalize()
// Returns the Unicode Normalization Form of the string.
let combinedText = '\u1E9B\u0323';
console.log(combinedText.normalize('NFC')); // Output: "ẛ̣"

// 27. localeCompare()
// Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.
let str1 = 'a';
let str2 = 'b';
console.log(str1.localeCompare(str2)); // Output: -1

// 28. trimStart()
// Removes whitespace from the beginning of a string.
console.log(paddedText.trimStart()); // Output: "Hello World  "

// 29. trimEnd()
// Removes whitespace from the end of a string.
console.log(paddedText.trimEnd()); // Output: "  Hello World"

// 30. matchAll()
// Returns an iterator of all results matching a string against a regular expression.
let regex = /[A-Z]/g;
let string = "Hello World";
let matches = string.matchAll(regex);
for (let match of matches) {
    console.log(match);
}
// Output: ["H", index: 0, input: "Hello World", groups: undefined]
// Output: ["W", index: 6, input: "Hello World", groups: undefined]

// 31. codePointAt()
// Returns the Unicode code point value at a given position in the string.
console.log(greeting.codePointAt(1)); // Output: 101

// 32. trimStart()
// Removes whitespace from the beginning of a string.
console.log("   Hello World".trimStart()); // Output: "Hello World"

// 33. trimEnd()
// Removes whitespace from the end of a string.
console.log("Hello World   ".trimEnd()); // Output: "Hello World"

// 34. anchor()
// Creates an HTML anchor element and sets its name attribute.
let anchorTag = "example".anchor("example-anchor");
console.log(anchorTag); // Output: <a name="example-anchor">example</a>

// 35. big()
// Creates an HTML <big> element.
let bigTag = "example".big();
console.log(bigTag); // Output: <big>example</big>

// 36. blink()
// Creates an HTML <blink> element (not supported by most modern browsers).
let blinkTag = "example".blink();
console.log(blinkTag); // Output: <blink>example</blink>

// 37. bold()
// Creates an HTML <b> element.
let boldTag = "example".bold();
console.log(boldTag); // Output: <b>example</b>

// 38. fixed()
// Creates an HTML <tt> element.
let fixedTag = "example".fixed();
console.log(fixedTag); // Output: <tt>example</tt>

// 39. fontcolor()
// Creates an HTML <font> element and sets its color attribute.
let fontColorTag = "example".fontcolor("red");
console.log(fontColorTag); // Output: <font color="red">example</font>

// 40. fontsize()
// Creates an HTML <font> element and sets its size attribute.
let fontSizeTag = "example".fontsize(7);
console.log(fontSizeTag); // Output: <font size="7">example</font>

// 41. italics()
// Creates an HTML <i> element.
let italicsTag = "example".italics();
console.log(italicsTag); // Output: <i>example</i>

// 42. link()
// Creates an HTML <a> element and sets its href attribute.
let linkTag = "example".link("https://www.example.com");
console.log(linkTag); // Output: <a href="https://www.example.com">example</a>

// 43. small()
// Creates an HTML <small> element.
let smallTag = "example".small();
console.log(smallTag); // Output: <small>example</small>

// 44. strike()
// Creates an HTML <strike> element.
let strikeTag = "example".strike();
console.log(strikeTag); // Output: <strike>example</strike>

// 45. sub()
// Creates an HTML <sub> element.
let subTag = "example".sub();
console.log(subTag); // Output: <sub>example</sub>

// 46. sup()
// Creates an HTML <sup> element.
let supTag = "example".sup();
console.log(supTag); // Output: <sup>example</sup>
