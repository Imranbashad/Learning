// Promise Methods with Explanations and Examples

// 1. Promise.all(iterable)
// Description: Returns a single Promise that resolves when all of the promises in the iterable argument have resolved.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // Output: [3, 42, "foo"]
});

// 2. Promise.allSettled(iterable)
// Description: Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
const promise4 = Promise.resolve(33);
const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
Promise.allSettled([promise4, promise5]).then(results => {
  results.forEach((result) => console.log(result.status));
  // Output:
  // "fulfilled"
  // "rejected"
});

// 3. Promise.any(iterable)
// Description: Returns a single promise that resolves as soon as any of the promises in the iterable argument resolves.
const promise6 = Promise.resolve(44);
const promise7 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
Promise.any([promise6, promise7]).then(value => {
  console.log(value); // Output: 44
});

// 4. Promise.prototype.catch(onRejected)
// Description: Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
const promise8 = new Promise((resolve, reject) => {
  throw new Error('Uh-oh!');
});
promise8.catch(error => {
  console.error(error); // Output: Error: Uh-oh!
});

// 5. Promise.prototype.finally(onFinally)
// Description: Appends a handler to the promise, and returns a new promise which is resolved when the original promise is resolved.
const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'bar');
});
promise9.finally(() => {
  console.log('Promise is settled');
}).then(value => {
  console.log(value); // Output: "bar"
});

// 6. Promise.prototype.then(onFulfilled, onRejected)
// Description: Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled.
const promise10 = new Promise((resolve, reject) => {
  resolve('Success!');
});
promise10.then(value => {
  console.log(value); // Output: "Success!"
});
