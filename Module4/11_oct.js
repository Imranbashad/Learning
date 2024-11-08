//  promise is an object which represents the eventual completion or failure of an asynchronus operation
// promise - 

// Promise.resolve().then(()=>{
//     console.log("resolved");
// })
// Promise.reject().catch(()=>{
//     console.log("rejected");
// })

// const number = 5;
//  creating a promise
// const myPromise = new Promise( (resolve,reject) => {
//     if(number % 2 == 0){
//         console.log("resolved");
//     }else{
//         console.log("rejected");
//     }
// });
// =============================================================================================
// Creating a promise
const number = 5;
const isEven = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve ("even")
        // return 
      } else {
        reject ("odd")
        // 
      }
    }, 2000);
  });
};
//  Consume a promise
isEven(3)
  .then((message) => {
    console.log(`${message}`);
  }) // executes when resolved
  .catch((error) => {
    console.error(`${error}`);
  }) // executes when rejected
  .finally(() => {
    console.log(`completed`);
  }); // executes always
// ==============================================================================================

const url = "https://jsonplaceholder.typicode.com/todos/1"
console.log(fetch(url)); // always gives a promise
fetch(url)
  .then((response)=>{
    return response.text        // .text / .blob / .json() types of data we get 
  }).then((data)=>{             // second .then is for handling json data which is received
    console.log(data)
    return {}
  })
  .catch((error)=>{
    console.log(error);
  });

// what are http status codes..?

fetch(url)
  .then((response)=>{           // getting parsed json object 
    return response.json() 
  }).then((data)=>{             // second .then is for handling json data which is received
    console.log(data)
    return {}
  })
  .catch((error)=>{
    console.log(error);
  });
  
// -----------------------------------------------------------------
const url2 = "https://jsonplaceholder.typicode.com/users"
fetch(url2)
  .then((response)=>{
    return response.json()
  }).then((users)=>{
    users.forEach((user,index)=>{
        console.log(user.name)
    })
  })
  .catch((error)=>{
    console.log(error);
  })

//   also promise chaining means multiple .then or .catch etc nested if required 
// Promise chaining means when there are sequence of promises that are executed one after the other called promise chaining

// EXAMPLE: IN ABOVE. getting parsed json object AND THEN second .then is for handling json data which is received
// ======================================================================================================================


const url3 = "https://jsonplaceholder.typicode.com/users/3";
fetch(url3)
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts[0].userId);
    posts.forEach((post) => {
      console.log(post.title);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//    

/*
const url3 = "https://jsonplaceholder.typicode.com/users/3";
fetch(url3)
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.log("Error parsing user JSON:", error);
  })
  .then((user) => {
    console.log(user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .catch((error) => {
    console.log("Error fetching posts:", error);
  })
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.log("Error parsing posts JSON:", error);
  })
  .then((posts) => {
    if (posts.length > 0) {
      console.log(posts[0].userId);
      posts.forEach((post) => {
        console.log(post.title);
      });
    } else {
      console.log("No posts found.");
    }
  })
  .catch((error) => {
    console.log("Error processing posts:", error);
  });

*/

  
