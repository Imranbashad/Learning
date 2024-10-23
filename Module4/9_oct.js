//  ES6

const myObject = { name: "Alice", age: 25 };

// Updating a property
myObject.age = 26;
console.log(myObject.age); // 26

// Adding a new property
myObject.city = "Wonderland";
console.log(myObject.city); // Wonderland

// Reassigning the object itself would cause an error
// myObject = { name: "Bob" }; // TypeError: Assignment to constant variable.


// const num = 10;
// num = num*10;

//  we can update but cannot reassign to const.

// ------------------------------------------------------------------------------------------------------
// using template literals we can also write logic in string 
console.log(`hello 2+ 2 is ${2+2} `);

// ------------------------------------------------------------------------------------------------------
// arrow function we prefer const varible not let. because of reassign. 
const add = (a,b) =>{
    return a+b;
}
// add = 8; now this wont happen if we use const. but in let then we get error that add is not function.
console.log(add(2,3));
// ---------------------------------------------------------------------------------------------------------

const def = (name="imran")=>{
    console.log(name)
}
def()
// defalult parameter
// ---------------------------------------------------------------------------------------------------------------

// classes allow us to create resuable object template. which has certain properties and methods. 
// before classes we use constructors

class person{
    constructor(name,age){
        this.name = name;  // properties 
        this.age = age;
    }
//In JavaScript, within a class, you don't need the function keyword for methods.
//Methods inside a class are defined just with their names:
    introduce (){   // methods
        console.log(`hi iam ${this.name} and i am ${this.age} years old`)
    }
    isstudent(){
        console.log(`${this.age>24 ? "yes" : "no"} iam ${this.age >24 ? "a": "not a"} student`);
    }
}

let person1 = new person("Imran",22);
let person2 = new person ("Nemesis", 5000)

person1.introduce();
person2.introduce(); 

person1.isstudent();
person2.isstudent();
// -------------------------------------------------------------------------------------------------------------------
// static methods

class op {
    constructor(val1, val2){
        this.val1 = val1;
        this.val2 = val2;
    }

    static add(a,b){
        console.log(a+b);
    }

    sub(a,b) {
        console.log(a-b);
    }
}

// new op(5,6).add(1,2);

op.add(1,2); // for static 5,6 are not used . sttic method is not dependent on instance values. 

new op(5,6).sub(1,2); // for non static  // instance syntax

//  problem statement

class vehicle{
    constructor(name,year,mileage){
        this.name= name;
        this.year=year;
        this.mileage = mileage;
    }

    calculateAge(currentYear){
        return currentYear-this.year;
    }
    mileage(newMileage){
        this.mileage=newMileage;
    }
}
let scooty = new vehicle("tvs",2019,"60kmpl");
let bmw = new vehicle("bm x5",2013,"20kmpl")

console.log(bmw.calculateAge(2024))
// --------------------------------------------
// // Instance method
class InstanceCalculator {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    multiply() {
      return this.a * this.b;
    }
  }
  
  const instanceCalc = new InstanceCalculator(5, 3);
  console.log(instanceCalc.multiply()); // Output: 15
  
  // Static method
  class StaticCalculator {
    static multiply(a, b) {
      return a * b;
    }
  }
  
  console.log(StaticCalculator.multiply(5, 3)); // Output: 15

//    static need instance and non static doesnt need instace 

// instance is actual object that is created.
  

// --------------------------------------------------------------------------------------------------------------------


class student{
    constructor(age){
        this.age = age;
    }
    inclass(){
        console.log("studying")
    }
}
class samestudent extends student{
    constructor(age,height){
        super(age);
        this.height = height;
    }
    static insports(age,height){
        console.log("yes above "+ height + " age " +age)
    }
    insports(){
        console.log("yes above "+ this.height + " age " +this.age)
    }
}

let imran = new samestudent(30,6);
samestudent.insports(25,5.7);
imran.insports();


// // Create the instance with the required properties
// let imran = new SameStudent(25, 5.6);
// SameStudent.insports(25, 5.7); // This is a static method


//  we can also update instance values like below 
// // For instance methods, update properties if needed before calling the method
// imran.age = 30;
// imran.height = 6;
// imran.insports(); // Calls the instance method with updated properties
// --------------------------------------------------------------------------

// npm init

// package name

// npm i packageName