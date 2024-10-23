//  Asyn vs syncronous

//  fetchingdata , userinputs, etc 

// event looop is mechanism that handles task que micro task que web api etc.

//************************************************event loop execution process interview question imp******************************************************;
/*
setTimeout(()=> {
    console.log("hello")
},5000)

Promise.resolve().then(()=>{
    console.log("helloooo")
})
//  promise has three states (pending ,sucess, failure)
// -----------------------------------------------------------------------------------------------------------------
// Event loop (consists of callStack , callback Que, web api(storage))

// call stack keeps track of function calls. and stacks over one other. as soon as function gets executed it removes from stack
//  call stak is a data structure.

//  in callback Queue( microque, macroque ) 
//  some rules to push into micro or macro task

// proomise will always go into micro task queue

//  first micro is executed and then macro task

//  callback function means whenever a function is associated with any events call back excuted once event is complete so its called calback function

/* A callback function is a function that is passed into another function as
 an argument and is executed after some kind of event or operation is completed.

 */

// Simulates fetching data from a server with a delay of 2 seconds
function fetchData(callback) {
    setTimeout(() => {
      const data = "Here is your data"; // Data fetched after 2 seconds
      callback(data);  // Calls the provided callback function with the fetched data
    }, 2000);  // 2000 milliseconds = 2 seconds
  }
  
  // Processes the fetched data by logging it to the console
  function processData(data) {
    console.log("Processing: " + data); // Logs the data passed to it
  }
  
  // Initiates the data fetching process and specifies processData as the callback function
  fetchData(processData);  // When fetchData completes, processData will be called with the data
// ---------------------------------------------------------------------------------------------------------------------------  
/*
Passing a function as a parameter:

dosome(function(result) {
  // Do something with result
});
Here, you’re calling dosome and passing an anonymous function as its argument.
---------------------------------
function dosome(function(result)) {
  // Function cannot be used as a parameter here
}

This is incorrect because function(result) cannot be used directly
as a parameter when defining another function. Function declarations
don't accept another function declaration as a parameter.

*/

// dosome (function(result){
//     dosomeot(result,function(result){
//         doanoth(result,function(result){
//             console.log("hello")
//         })
//     })
// })

// -----------------------------------------------------------
function addOne(number, callback) {
    callback(number + 1);
}

function addTwo(number, callback) {
    callback(number + 2);
}

function addThree(number, callback) {
    callback(number + 3);
}

let initialValue = 5;

addOne(initialValue, function(result1) {
    addTwo(result1, function(result2) {
        addThree(result2, function(result3) {
            console.log(result3); // Outputs 11
        });
    });
});
// -----------------------------------------------------------------------------------------------------------------------------

