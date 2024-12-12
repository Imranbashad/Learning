/* 
Polyfills: is a piece of code that developers expect the browser to provide the natively.
these are used to implement features that browser do not support.

//IMPORTANCE OF POLYFILLS
cross browser compatibility
user experience
progressive enhancement ( use modern features without excluding users on outdated platforms)

//WORKING OF POLYFILLS
 feature detection 
 impletation
 (polyfill should be same as actual method and should return same output as actual method)

// DRAWBACK
/ new user who have updated browser will have extra load time
/ finding and writing the polyfill


Array: The built-in global object in JavaScript used to create and manipulate arrays.

array: A common variable name used to refer to an instance of an array, but not a special keyword or object in JavaScript.



*/

if (!Array.prototype.includes) {
    Array.prototype.includes = function(element, start) {
      'use strict';
      if (this == null) {
        throw new TypeError('Array.prototype.includes called on null or undefined');
      }
  
      const array = Object(this);
      const length = array.length >>> 0;
  
      if (length === 0) {
        return false;
      }
  
      const startIndex = start | 0;
      const index = Math.max(startIndex >= 0 ? startIndex : length - Math.abs(startIndex), 0);
  
      while (index < length) {
        if (array[index] === element) {
          return true;
        }
        index++;
      }
  
      return false;
    };
  }
//============================================================================================================= 
// HOW TO OVERCOME THE LATENCY THAT UPDATED NEW VERSIONS HAS

//   Why Bundle Polyfills?
//   Bundling polyfills into a single file has several benefits:
  
//   Compatibility: Ensures that your web application works consistently across different browsers and versions.
  
//   Efficiency: Reduces the number of network requests by combining multiple polyfills into a single file.
  
//   Organization: Keeps your codebase clean and easier to manage.

// USE TOOLS LIKE BABLE / WEBPACK

// DUE TO SECURITY WE DONT USE THIRD PARTY LIBRARY POLYFILLS AND IMPORTED WILL HAVE MORE SIZE

//======================================================================================================================

// Currying 

/* is the process of when a function takes multiple arguments we transform that function into nested function
such that every function takes single argument. 

*/
function add() {
    return a+b;
}
add(2,3)
//------------------------------
function add1(a){
    return function add2(b){
        console.log(a+b)
    }
}
add1(2)(3);

// advantages / resuability 
//====================================================

// map polyfill

if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const array = Object(this);
      const length = array.length >>> 0;
      const result = new Array(length);
  
      for (let i = 0; i < length; i++) {
        if (i in array) {
          result[i] = callback.call(thisArg, array[i], i, array);
        }
      }
  
      return result;
    };
  }
  