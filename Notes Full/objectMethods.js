// Object Methods with Explanations and Examples

// 1. Object.keys(obj)
// Description: Returns an array of a given object's property names.
const person1 = {name: 'John', age: 30, city: 'New York'};
console.log(Object.keys(person1)); // Output: ['name', 'age', 'city']

// 2. Object.values(obj)
// Description: Returns an array of a given object's property values.
const person2 = {name: 'Doe', age: 25, city: 'San Francisco'};
console.log(Object.values(person2)); // Output: ['Doe', 25, 'San Francisco']

// 3. Object.entries(obj)
// Description: Returns an array of a given object's own enumerable property [key, value] pairs.
const person3 = {name: 'Alice', age: 28, city: 'Los Angeles'};
console.log(Object.entries(person3)); // Output: [['name', 'Alice'], ['age', 28], ['city', 'Los Angeles']]

// 4. Object.assign(target, ...sources)
// Description: Copies all enumerable own properties from one or more source objects to a target object.
const targetObj = {x: 1, y: 2};
const sourceObj = {y: 3, z: 4};
const returnedTarget = Object.assign(targetObj, sourceObj);
console.log(returnedTarget); // Output: {x: 1, y: 3, z: 4}

// 5. Object.freeze(obj)
// Description: Freezes an object. A frozen object can no longer be changed.
const freezeObj = {prop: 42};
Object.freeze(freezeObj);
freezeObj.prop = 33; // This will be ignored in strict mode.
console.log(freezeObj.prop); // Output: 42

// 6. Object.seal(obj)
// Description: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
const sealObj = {property: 'value'};
Object.seal(sealObj);
sealObj.newProp = 'new'; // This will not be added.
console.log(sealObj.newProp); // Output: undefined

// 7. Object.create(proto, [propertiesObject])
// Description: Creates a new object with the specified prototype object and properties.
const protoPerson = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};
const newPerson = Object.create(protoPerson);
newPerson.name = 'Bob'; 
newPerson.isHuman = true; 
newPerson.printIntroduction(); // Output: My name is Bob. Am I human? true

// 8. Object.defineProperty(obj, prop, descriptor)
// Description: Defines a new property directly on an object, or modifies an existing property, and returns the object.
const defineObj = {};
Object.defineProperty(defineObj, 'newProp', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(defineObj.newProp); // Output: 42

// 9. Object.defineProperties(obj, props)
// Description: Defines new or modifies existing properties directly on an object, returning the object.
const definePropsObj = {};
Object.defineProperties(definePropsObj, {
  property1: {
    value: true,
    writable: true
  },
  property2: {
    value: 'Hello',
    writable: false
  }
});
console.log(definePropsObj.property1); // Output: true
console.log(definePropsObj.property2); // Output: Hello

// 10. Object.getOwnPropertyDescriptor(obj, prop)
// Description: Returns a property descriptor for a named property on an object.
const descriptorObj = {property1: 42};
const descriptor = Object.getOwnPropertyDescriptor(descriptorObj, 'property1');
console.log(descriptor); // Output: { value: 42, writable: true, enumerable: true, configurable: true }

// 11. Object.getOwnPropertyDescriptors(obj)
// Description: Returns an object containing all own property descriptors for an object.
const descriptorsObj = {property1: 42, property2: 'Hello'};
const descriptors = Object.getOwnPropertyDescriptors(descriptorsObj);
console.log(descriptors); // Output: { property1: { value: 42, writable: true, enumerable: true, configurable: true }, property2: { value: 'Hello', writable: true, enumerable: true, configurable: true }}

// 12. Object.getPrototypeOf(obj)
// Description: Returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.
const prototypeObj = {};
const proto = Object.getPrototypeOf(prototypeObj);
console.log(proto); // Output: {constructor: ƒ, ...}

// 13. Object.setPrototypeOf(obj, proto)
// Description: Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object.
const setProtoObj = {};
const protoExample = {greet: function() { return 'Hello!'; }};
Object.setPrototypeOf(setProtoObj, protoExample);
console.log(setProtoObj.greet()); // Output: Hello!

// 14. Object.is(obj1, obj2)
// Description: Determines whether two values are the same value.
console.log(Object.is('foo', 'foo')); // Output: true
console.log(Object.is({}, {})); // Output: false

// 15. Object.fromEntries(iterable)
// Description: Transforms a list of key-value pairs into an object.
const entryMap = new Map([['key1', 'value1'], ['key2', 42]]);
const fromEntriesObj = Object.fromEntries(entryMap);
console.log(fromEntriesObj); // Output: { key1: 'value1', key2: 42 }
