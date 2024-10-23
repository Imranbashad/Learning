//
//  -------------  Strings -------------


//console.log("hello")
// Falsy values
//  0, null, Nan, "", undefined, false       // false and falsy are different

//       1:30
//----------------------------------------------------------------------------------------------------------------------
let arr = ["hello",100, "hi", 2,false,"empty","mango","apple"];
let size = arr.length; // this is a property or methods. If we use brackets then its called calling a function.
console.log(size);

arr.push("hey"); // adds element in last
arr.pop(); // removes last element
arr.unshift("imran"); // adds element in first
arr.shift(); // removes first element
console.log(arr);

// array is a collection of elements in a sequential order data can be any type.
//-----------------------------------------------------------------------------------------------------------------------
let array = new Array(10);
//array.fill(value,index from, till index(exclusive))
array.fill(1,3,6); 
/*helps in filling defult values in array. we can also give from where to where values need to be filled
but mostly we use value parameter
 */
console.log(arr);
arr.reverse();
console.log(arr);
//------------------------------------------------------------------------------------------------------------------------
let array2 = new Array(10).fill(false);  // we can append .functions it like doing operation on output of it. 
// here we have created a arrayof fixed size and then filling the values of false in all places .
console.log(array2)

// -----------------------------------------------------------------------------------------------------------------------
let isPresent = arr.includes("hello") // checks a value is present in array or not
console.log(isPresent)
// -----------------------------------------------------------------------------------------------------------------------
let position = arr.indexOf("hello")  
// if there are multiple values of same then first index it matches is output
//if index of not able to find the value it gives -1 as an answer.
let position2 = arr.lastIndexOf("hello") // it will give index from last
// if there are 3 same elements then we have to loop and find value;
console.log(position)
// -----------------------------------------------------------------------------------------------------------------------
let fruits = ["mango","gauva","apple","pineapple"]
let str = fruits.join(" "); // it takes delimitter(seperator) we can add anything as seperator ex(+,-,@ or space..... etc.,)
console.log(fruits)
console.log(str);
// -----------------------------------------------------------------------------------------------------------------------
let values = [1,2,3,4,5,6,7,8];

let i =0;
let j = values.length-1;
while(i<j){
    console.log(values[i],values[j]);
    i++;
    j--;
}
//output 1,8   2,7  3,6   .........
//---------------------------------------------      2D Array      ----------------------------------------------------------------
let matrix = [["a","b",],["c","d"],["e","f"]]
for(let i = 0;i<matrix.length;i++){
    let values = matrix[i]
    for(let j = 0;j<values.length;j++){
        console.log(matrix[i][j])
        console.log(values[j])
    }
}
// --------------------------------------------------------------------------------------------------------------------------------
 let numArray = [[1,2],[3,4],[5,10]];
let sum =0;
 for(let i = 0;i<numArray.length;i++){
    for(let j = 0;j<numArray[i].length;j++){
        sum = sum+numArray[i][j];
    }
 }
 console.log(sum);
//---------------------------------------------------------------------------------------------------------------------------------
let len = 5;
for(let i = 0;i<len;i++){
    let row = [];
    for(let j = 0;j<=i;j++){
        row.push(1);
    }
    console.log(row.join(""))       // practice .join method
}
// --------------------------------------------------------------------------------------------------------------------------------





