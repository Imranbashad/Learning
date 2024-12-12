// Useful Methods from Various Categories

// Function Methods

// 1. Function.prototype.apply()
// Description: Calls a function with a given `this` value, and arguments provided as an array (or an array-like object).
function greet(name) {
    console.log(`Hello, ${name}`);
  }
  greet.apply(null, ['John']); // Output: Hello, John
  
  // 2. Function.prototype.call()
  // Description: Calls a function with a given `this` value and arguments provided individually.
  greet.call(null, 'Jane'); // Output: Hello, Jane
  
  // 3. Function.prototype.bind()
  // Description: Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
  const greetJohn = greet.bind(null, 'John');
  greetJohn(); // Output: Hello, John
  
  // Map Methods
  
  // 1. Map.prototype.set()
  // Description: Sets the value for the key in the Map object. Returns the Map object.
  const map = new Map();
  map.set('key1', 'value1');
  console.log(map.get('key1')); // Output: value1
  
  // 2. Map.prototype.get()
  // Description: Returns the value associated with the key, or undefined if there is none.
  console.log(map.get('key2')); // Output: undefined
  
  // 3. Map.prototype.has()
  // Description: Returns a boolean indicating whether an element with the specified key exists or not.
  console.log(map.has('key1')); // Output: true
  
  // 4. Map.prototype.delete()
  // Description: Removes the specified element from a Map by key.
  map.delete('key1');
  console.log(map.has('key1')); // Output: false
  
  // 5. Map.prototype.clear()
  // Description: Removes all elements from a Map.
  map.set('key1', 'value1');
  map.clear();
  console.log(map.size); // Output: 0
  
  // WeakMap Methods
  
  // 1. WeakMap.prototype.set()
  // Description: Sets the value for the key in the WeakMap object. Returns the WeakMap object.
  const weakMap = new WeakMap();
  const obj = {};
  weakMap.set(obj, 'value');
  console.log(weakMap.get(obj)); // Output: value
  
  // 2. WeakMap.prototype.get()
  // Description: Returns the value associated with the key, or undefined if there is none.
  console.log(weakMap.get({})); // Output: undefined
  
  // 3. WeakMap.prototype.has()
  // Description: Returns a boolean indicating whether an element with the specified key exists or not.
  console.log(weakMap.has(obj)); // Output: true
  
  // 4. WeakMap.prototype.delete()
  // Description: Removes the specified element from a WeakMap by key.
  weakMap.delete(obj);
  console.log(weakMap.has(obj)); // Output: false
  
  // WeakSet Methods
  
  // 1. WeakSet.prototype.add()
  // Description: Appends a new object to the end of a WeakSet.
  const weakSet = new WeakSet();
  const obj2 = {};
  weakSet.add(obj2);
  console.log(weakSet.has(obj2)); // Output: true
  
  // 2. WeakSet.prototype.has()
  // Description: Returns a boolean indicating whether an element with the specified value exists in the WeakSet.
  console.log(weakSet.has({})); // Output: false
  
  // 3. WeakSet.prototype.delete()
  // Description: Removes the specified element from a WeakSet.
  weakSet.delete(obj2);
  console.log(weakSet.has(obj2)); // Output: false
  
  // TypedArray Methods (example with Uint8Array)
  
  // 1. TypedArray.prototype.set()
  // Description: Sets a sequence of values to the typed array, starting at offset.
  const uint8 = new Uint8Array(5);
  uint8.set([1, 2, 3], 0);
  console.log(uint8); // Output: Uint8Array(5) [1, 2, 3, 0, 0]
  
  // 2. TypedArray.prototype.subarray()
  // Description: Returns a new TypedArray view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.
  const subArray = uint8.subarray(1, 3);
  console.log(subArray); // Output: Uint8Array(2) [2, 3]
  
  // Reflect Methods
  
  // 1. Reflect.apply()
  // Description: Calls a target function with arguments as specified.
  const numbers = [5, 6, 2, 3, 7];
  console.log(Reflect.apply(Math.min, undefined, numbers)); // Output: 2
  
  // 2. Reflect.ownKeys()
  // Description: Returns an array of the target object's own property keys.
  const obj3 = { a: 1, b: 2, [Symbol('c')]: 3 };
  console.log(Reflect.ownKeys(obj3)); // Output: ['a', 'b', Symbol(c)]
  
  // Atomics Methods
  
  // 1. Atomics.add()
  // Description: Adds a given value at a given position in the typed array and returns the old value at that position.
  const sharedBuffer = new SharedArrayBuffer(1024);
  const typedArray = new Uint8Array(sharedBuffer);
  typedArray[0] = 1;
  console.log(Atomics.add(typedArray, 0, 2)); // Output: 1 (value before addition)
  console.log(typedArray[0]); // Output: 3 (value after addition)
  
  // 2. Atomics.store()
  // Description: Stores a given value at a given position in the typed array and returns the value.
  console.log(Atomics.store(typedArray, 1, 4)); // Output: 4
  console.log(typedArray[1]); // Output: 4
  
  // Intl Methods (example with Intl.DateTimeFormat)
  
  // 1. Intl.DateTimeFormat().format()
  // Description: Formats a date according to a locale and formatting options.
  const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  console.log(dateFormatter.format(new Date())); // Output: e.g., 'November 18, 2024'
  
  // BigInt Methods
  
  // 1. BigInt.prototype.toString()
  // Description: Returns a string representing the BigInt object in the specified radix (base).
  const bigInt = BigInt(123456789012345678901234567890);
  console.log(bigInt.toString()); // Output: '123456789012345678901234567890'
  
  // 2. BigInt.prototype.valueOf()
  // Description: Returns the primitive value of the specified BigInt object.
  console.log(bigInt.valueOf()); // Output: 123456789012345678901234567890n
  
  // Proxy Methods
  
  // 1. Proxy.revocable()
  // Description: Creates a new revocable Proxy object.
  const targetObject = { message: "Hello" };
  const handler = {
    get: function(target, prop) {
      return prop in target ? target[prop] : "default";
    }
  };
  const { proxy, revoke } = Proxy.revocable(targetObject, handler);
  console.log(proxy.message); // Output: Hello
  revoke();
  // console.log(proxy.message); // Throws TypeError
  
  