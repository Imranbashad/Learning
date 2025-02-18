//  Higher order function? 
// navigator.userAgent gives chorme version / browser version
// all javascript objects inherit properties and methods form prototypes

//learn about call applly and bind 2:16:00

//   prototyep is property of class
//   proto is property of object

const arr = [];

Array.prototype.at = function (index) {
  let array = this;

  if (Array.isArray(array) && array.length) {
    let pos = index || 0;
    return array[pos];
  }
};

let ans = arr.at(1);

console.log(ans);

// ------------------------------------------------------------------

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback) {
      const arr = this;
  
      for (let i = 0; i < arr.length; i++) {
        if (typeof callback === "function") {
          callback(arr[i], i, arr);
        }
      }
    };
  }
  
  const arr1 = [2, 3, 4, 4, 5];
  
  arr1.forEach((item, index, curr) => {
    console.log(item, index, curr);
  });
//   ------------------------------------------------------------------------------------
if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
      const arr = this;
      let output = [];
  
      for (let i = 0; i < arr.length; i++) {
        let res;
        try {
          res = callback(arr[i], i, arr);
        } catch (e) {
          res = e;
        }
        output.push(res);
      }
      return output;
    };
  }
  
  let arr2 = ["A", "B", "C"];
  let output = arr2.map((i) => {
    let o;
    try {
      if (i == "B") {
        throw "hello";
      }
      o = i + 1;
    } catch (e) {
      o = e;
    }
    return o;
  });
  console.log(output);
// --------------------------------------------------------------------------------



