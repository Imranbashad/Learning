// function calling itself is called recursion.
/*

when you are providing value to function call it called argument. and when function id declared its called parameter.

*/

// event call stack. where javascript runtime environment
// call stack helps in calling function in JS RUN TIME ENVIRONMENT.
//if you dont return anything from function by dafault answer is Undefined.
//lexical scope means accessing varaibles from parent scope 
// garbage collector will clear the memory after every execution.
// MOST IMPORTANT FOR INTERVIEWS. 
let m = 2;
function a (){
    let p = 4;
    if(p<7){
        let d = 8;
        console.log(p+m)
    }
    console.log(p*m)
}
a();
console.log(a())
// execution context means in which order the program will run. make diagram and check.

// var can be accessed inside function after the block but let and const cannot be accessed.

/*
scope
execution context
callstack
hoisting
event loop
*/

// infinite recursion
// function sum (x){
//     console.log(x);
//     sum(x-1);
// }
// sum(2)
// recursion
function sum2 (x){
    if(x===0){
        return
    }
    console.log(x);
    sum2(x-1);
}
sum2(2)