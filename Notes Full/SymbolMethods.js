// Symbol Methods with Explanations and Examples

// 1. Symbol.for(key)
// Description: Searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise, returns a new symbol created with the given key.
const sym1 = Symbol.for('key');
console.log(Symbol.for('key') === sym1); // Output: true

// 2. Symbol.keyFor(sym)
// Description: Retrieves a shared symbol key from the runtime-wide symbol registry for the given symbol.
const sym2 = Symbol.for('key');
console.log(Symbol.keyFor(sym2)); // Output: 'key'

// 3. Symbol.prototype.description
// Description: Returns a string containing the description of the symbol.
const sym3 = Symbol('desc');
console.log(sym3.description); // Output: 'desc'

// Well-known Symbol Methods

// 4. Symbol.iterator
// Description: A method that returns the default iterator for an object. Used by `for...of`.
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next().value); // Output: 1

// 5. Symbol.asyncIterator
// Description: A method that returns the default AsyncIterator for an object. Used by `for await...of`.
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      async next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { done: true };
      }
    };
  }
};
(async () => {
  for await (const num of asyncIterable) {
    console.log(num); // Output: 0, 1, 2
  }
})();

// 6. Symbol.hasInstance
// Description: A method determining if a constructor object recognizes an object as its instance.
class MyClass {
  static [Symbol.hasInstance](instance) {
    return instance instanceof Array;
  }
}
console.log([] instanceof MyClass); // Output: true

// 7. Symbol.isConcatSpreadable
// Description: A Boolean value indicating if an object should be flattened to its array elements.
let arr1 = [1, 2];
let arr2 = [3, 4];
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr1.concat(arr2)); // Output: [1, 2, [3, 4]]

// 8. Symbol.match
// Description: A method that matches against a string. Used by `String.prototype.match()`.
const regexp = {
  [Symbol.match](str) {
    return str.includes('match');
  }
};
console.log('does it match?'.match(regexp)); // Output: true

// 9. Symbol.replace
// Description: A method that replaces matched substrings of a string. Used by `String.prototype.replace()`.
const replace = {
  [Symbol.replace](str, substr) {
    return str.split(substr).join('REPLACED');
  }
};
console.log('hello world'.replace(replace, 'world')); // Output: 'hello REPLACED'

// 10. Symbol.search
// Description: A method that returns the index within a string that matches the regular expression. Used by `String.prototype.search()`.
const search = {
  [Symbol.search](str) {
    return str.indexOf('search');
  }
};
console.log('this is a search'.search(search)); // Output: 10

// 11. Symbol.species
// Description: A constructor function that is used to create derived objects.
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map(x => x * x);
console.log(mapped instanceof MyArray); // Output: false

// 12. Symbol.split
// Description: A method that splits a string at the indices that match the regular expression. Used by `String.prototype.split()`.
const split = {
  [Symbol.split](str) {
    return str.split('split');
  }
};
console.log('split this sentence'.split(split)); // Output: ['', ' this sentence']

// 13. Symbol.toPrimitive
// Description: A method that converts an object to a primitive value.
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 10;
    }
    return null;
  }
};
console.log(+obj); // Output: 10

// 14. Symbol.toStringTag
// Description: A string value used to label the type of an object.
class MyClass2 {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}
const instance = new MyClass2();
console.log(Object.prototype.toString.call(instance)); // Output: [object MyClass]

// 15. Symbol.unscopables
// Description: An object whose own and inherited property names are excluded from the `with` environment bindings of the associated object.
const obj2 = { foo: 1, bar: 2 };
obj2[Symbol.unscopables] = { foo: true };
with (obj2) {
  // console.log(foo); // Error: foo is not defined
  console.log(bar); // Output: 2
}
