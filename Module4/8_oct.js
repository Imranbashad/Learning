// primitive data types : number string boollean bigint... 
// reference type: arrays and objects

// let and const are block level and var is function level. 
// var has disadvantages with hoisting.

// function declararion
function hello(){
    // logic
}

// function expresssion
const myfunct = function(){
    // logic
}

// arrow function

if(true){
    const b = 7;
const arowfunction = ()=>{
    // logic
    const a = 10; // block scope variable
    console.log(a+b)
}

arowfunction();
// console.log(a)
}

const oj = {
    a : "batman",
    b :{
        s: "superman"
    }
}

console.log(oj.b.s , oj["b"]["s"])
// -------------------------------------------------------------------------------------------------------------------

//  closures and hoisting

function outer(){
    count = 0;
    return function inner(){
        count++;
        console.log(count)
    }
}

const innerfn = outer();
innerfn();
//  closure is a function that remembers the variable from outer scope / parent scope and even after execution is finished .
// -------------------------------------------------------------------------------------------------------------------------

// hoisting moves variable declaration to top in the current scope
//  hoistingn only for var 

console.log(vari)
var vari = 10;
/*
var vari;
console.log(vari);
vari = 10;
*/
// ---------------------------------------------------------------------------------------------------------------------

const a = 10;

// a = a+10; cannot reassing const variable 

// ---------------------------------------------------------------------------------------------------------------------

const arr = [1,3,5,6]
const [c,b, ...rest]= arr;  // ...rest will have all values which are not destructured.
//destructuring to store variable in different variable and  it goes from left to right we can add multiple variables
// when we need to use a value of object multiple we can just destructure and use it again and again.
console.log(c,b)

const obj = {
    nam : "imran",
    age : 25, 
    profession : "batman"
}

const {profession} = obj;
// instead of wrting ----obj.profession----- we can just use profession after destructuring
console.log(profession)
//  nested destructuring
const user = {
    name: "John",
    address: {
      city: "New York",
      zip: "10001"
    },
    hobbies: ["reading", "gaming"]
  };
  
  // Destructuring nested objects
  const { name, address: { city, zip }, hobbies: [hobby1, hobby2] } = user;
  
  console.log(name); // John
  console.log(city); // New York
  console.log(zip); // 10001
  console.log(hobby1); // reading
  console.log(hobby2); // gaming
  // we can name anything we want in array destructure but in case of object we use key value pair.
//    also in objects sequence doesnt matter and we skip . but in array sequence is important.
// ----------------------------------------------------------------------------------------------------------------------
 // learn about trees dsa for react virtual DOM

