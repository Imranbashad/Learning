// JSON Methods with Explanations and Examples

// 1. JSON.parse(text)
// Description: Parses a JSON string, constructing the JavaScript value or object described by the string.
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj); // Output: {name: "John", age: 30, city: "New York"}

// 2. JSON.stringify(value)
// Description: Converts a JavaScript object or value to a JSON string.
const obj = {name: 'John', age: 30, city: 'New York'};
const jsonStringified = JSON.stringify(obj);
console.log(jsonStringified); // Output: '{"name":"John","age":30,"city":"New York"}'

// 3. JSON.stringify(value, replacer)
// Description: Converts a JavaScript object or value to a JSON string, replacing values if a replacer function is specified.
const jsonStringifiedWithReplacer = JSON.stringify(obj, (key, value) => {
  if (key === 'age') return undefined; // Exclude "age" property
  return value;
});
console.log(jsonStringifiedWithReplacer); // Output: '{"name":"John","city":"New York"}'

// 4. JSON.stringify(value, replacer, space)
// Description: Converts a JavaScript object or value to a JSON string with space indentation for readability.
const jsonStringifiedWithSpace = JSON.stringify(obj, null, 2);
console.log(jsonStringifiedWithSpace);
// Output:
// {
//   "name": "John",
//   "age": 30,
//   "city": "New York"
// }
