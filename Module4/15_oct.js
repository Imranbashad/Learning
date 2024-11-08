// create a promise

const myProm = new Promise((resolve,reject) => {
    const ans = true;
    if(ans) resolve ("hello");
    else reject("rejected")
})
//consume a proomise
myProm
.then((message) =>{
    console.log(message)
})
.catch((error) => {
    console.log(error)
})
//  ===========================================================================================================
const isEven = (number) => {
    return new Promise((resolve,reject) =>{
        // throw new error("there is some error")
        setTimeout(()=>{
            if(number%2 == 0){
                resolve(`${number} is even`)
            }
            else{
                reject(`${number} is odd`)
            }
        },5000)
    })
}

isEven(4)               // if it is function then this is how you call and then consume syntax
.then((message) =>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

// ============================================================================================================================

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let randomIntRange = getRandomInt(5, 15);
// console.log(randomIntRange); // Outputs a random integer between 5 and 15
// --------------------------------------------------------------------------------------------------
// function getRandomDecimal(min, max) {
//     return Math.random() * (max - min) + min;
// }

// let randomDecimalRange = getRandomDecimal(1.5, 7.5);
// console.log(randomDecimalRange); // Outputs a random decimal between 1.5 and 7.5
// -----------------------------------------------------------------------------------------------
// let randomDecimal = Math.random();
// console.log(randomDecimal);
// ----------------------------------------------------------------------------------------
// let randomDecimal10 = Math.random() * 10;
// console.log(randomDecimal10);
// -----------------------------------------------------------------------------
// let randomInt10 = Math.floor(Math.random() * 11);
// console.log(randomInt10);
// -------------------------------------------------------------------------------------------------

const diceRoll = new Promise((resolve,reject) =>{
    const roll = Math.floor(Math.random()*6 + 1)
    console.log("you roll "+roll);

    setTimeout(() => {
        if(roll > 3){
            resolve ("you won")
        }
        else{
            reject("you didnt win")
        }
    }, 2000);
})

diceRoll
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error);
    })

/*
    we can also omit settimeout(delay of 2000 milliseconds(2 sec)) 

    api calls willl have 100 or 200 milliseconds of delay. 
*/
// =================================================================================================================

//  call back means that gets executed after an event is occured

// getData((data) =>{
//     processData(data,(Processed)=>{
//         saveData(Processed,(result) =>{
//             console.log(result)
//         })
//     })
// })

// getData()
//   .then(data => processData(data))
//   .then(processed => saveData(processed))
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


//   async function main() {
//     try {
//       const data = await getData();
//       const processed = await processData(data);
//       const result = await saveData(processed);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   main();
// -------------------------------------------------------------------------------------------------------------

function step1(data, callback) {
    console.log("Step 1:", data);
    callback(data + " from step 1");
}

function step2(data, callback) {
    console.log("Step 2:", data);
    callback(data + " from step 2");
}

function step3(data, callback) {
    console.log("Step 3:", data);
    callback(data + " from step 3");
}

// Initiating the nested callbacks
step1("start", (result1) => {
    step2(result1, (result2) => {
        step3(result2, (finalResult) => {
            console.log("Final Result:", finalResult);
        });
    });
});

//  OUTPUT

// Step 1: start
// Step 2: start from step 1
// Step 3: start from step 1 from step 2
// Final Result: start from step 1 from step 2 from step 3

// ------------------------------------------------------------------------------------------------------------------------------------
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "data";
            resolve(data);
        }, 1000); // Simulating async operation with 1 second delay
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processed = data + " processed";
            resolve(processed);
        }, 1000); // Simulating async operation with 1 second delay
    });
}

function saveData(processed) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = processed + " saved";
            resolve(result);
        }, 1000); // Simulating async operation with 1 second delay
    });
}

getData()
    .then(data => processData(data))
    .then(processed => saveData(processed))
    .then(result => console.log(result))  // Outputs: "data processed saved"
    .catch(error => console.log(error));

//======================================================================================================================================
//  promise will execute at same time they execute at same time regardless of delay . and maximum delay will be taken as the highest delay 
// even if they have different delay.
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json()
)
const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
)
const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments/1").then(
    (response) => response.json()
)
Promise.all([fetchPost,fetchUser,fetchComments])
    .then(([post,user,comment]) =>{                 // it takes an array of values and returns promise after all are resolved.
        console.log(post);
        console.log(user);
        console.log(comment);
        
    })
    .catch((error) =>{
        console.log(error)
    })


    // promise.all - takes an arrey of promises. and waits untill all promises are resolves or rejected
    // it retuns a promise if all are resolved and
    //  rejects if one is rejected.
    
// ----------------------------------------------------------------------------------------------------------------------------------------

// promise.all - takes an arrey of promises. it waits for atelast one is resolved or rejected in the arrray.
// it retuns a promise

const fetchPost1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json()
)
const fetchUser2 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
)
const fetchComments3 = fetch("https://jsonplaceholder.typicode.com/comments/1").then(
    (response) => response.json()
)
Promise.race([fetchPost1,fetchUser2,fetchComments3])
    .then((post) =>{                                    // it only accepts one value because it resolves as soon as one is resolved
        console.log(post);   
    })
    .catch((error) =>{
        console.log(error)
    })
//=====================================================================================================================================
function getData1(){
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve("This is resolved Using ASYNC")
        }, 1000);
    })
}
//  using Promise
function fetchData() {
    getData1().then((daat)=>{
        console.log(daat)
    }).catch((error)=>{
        console.log(error)
    })
}
fetchData();
// using Async/Await 
async function fetchData(){
    try{
        const data = await getData1()
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}
fetchData()
// =====================================================================================================================================

async function example() {
    try {
        console.log('Waiting for the promise to resolve...');
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('Resolved after 2000 milliseconds');
            }, 2000); // 2-second delay
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

example();
// =====================================================================================================================================

const fetchPost5 = fetch("https://jsonplaceholder.typicode.com/posts/5").then(
    (response) => response.json()
)
const fetchUser5 = fetch("https://jsonplaceholder.typicode.com/users/5").then(
    (response) => response.json()
)
async function getpos() {
    try {
        const [post,user] = await Promise.all([fetchPost5,fetchUser5])
        console.log(post);
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
}
getpos()
// ========================================================================================================================
//  DOM is a tree like structure which browser looks at html document
// REact uses diffiling algorithm
// browser always use dom to understand changes done. every element is a node in html document.
// why include script just above closing body tag ?

 {/* <script defer/async> console.log('Scripts are running!'); </script> */}

 