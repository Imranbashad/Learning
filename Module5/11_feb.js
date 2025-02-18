var a = 2;

function abc(x) {
  const p = x + a;

  const ans = xyz(sum, p);
  return ans;
}
function xyz(callback, v) {
  const b = 3;
  const out = callback(v, b);
  return out;
}
function sum(x, y) {
  return x + y;
}
function sub(a, b) {
  return a - b;
}

const output = abc(4);
console.log(output);

// ---------------------------------------------------------------------------------------------------------

//v8 engine is a plce where js is excuted. it is present in browser and node.js

/* JavaScript Runtime Environment Components
Call Stack:

The call stack is a mechanism for an interpreter (like the JavaScript engine) to keep track of its place in a script that calls multiple functions.

When a function is called, it is added to the stack. When the function returns, it is removed from the stack.

Heap:

The heap is a region in memory where objects are allocated.

Unlike the stack, the heap is more dynamic and can handle data of varying sizes.

Queue:

JavaScript has a message queue that helps manage asynchronous operations.

When an asynchronous operation completes, it adds its callback to the queue, which waits until the stack is empty to execute.

Event Loop:

The event loop continuously checks the stack and the queue.

If the stack is empty, it takes the first callback from the queue and pushes it onto the stack, effectively executing it.

Web APIs:

Browsers provide additional features like setTimeout, DOM events, and AJAX requests through Web APIs.

These are not part of the JavaScript language but are provided by the browser environment to enhance the capabilities of JavaScript.  */

function getUser(onSuccess, onFailure) {
  setTimeout(() => {
    const user = { name: "ABC" };
    onSuccess(user);
  }, 1000);

  setTimeout(() => {
    const error = "oops";
    onFailure(error);
  }, 500);
}
const onDone = (user) => {
  console.log(user);
};
const onError = (err) => {
  console.log(err);
};

getUser(onDone, onError);

//   -------------------------------------------------------------------------------------------------------------

// closure means every function has a copy of lexical scope(function inside function and internal function has copy of parent variable etc.,)
// if any functin has child function so it has copy of lexical scope / parent function even after it is executed .

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//-------------------------------------------------------------------------------------------------
// callBack hell

function getUser(onSuccess, onFailure) {
  setTimeout(() => {
    const user = { name: "ABC", userId: "321" };
    onSuccess(user);
  }, 1000);

  setTimeout(() => {
    const error = "oops";
    onFailure(error);
  }, 500);
}
function getPosts(userId, onSuccess, onFailure) {
  setTimeout(() => {
    let posts = [{ title: "Study", postId: "123" }];
    onSuccess(posts);
  }, 1000);
}
function getComments(postId, onSuccess, onFailure) {
  setTimeout(() => {
    const comments = [{ comment: "Yoo!!", commentId: "091" }];
    onSuccess(comments);
  }, 1000);
}

getUser(
  (user) => {
    console.log(user);
    const { userId } = user;
    getPosts(
      userId,
      (posts) => {
        const firstPost = posts[0];
        const { postId } = firstPost;

        getComments(
          postId,
          (comments) => {
            console.log(comments);
          },
          (err) => {
            console.log("Comments Error");
          }
        );
      },
      (error) => {
        console.log("Posts Error");
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

// callback hell example facebook user , posts, comments, likes etc showing on home page same time.
// call back hell is need when we have function that is depended on another function

//   ---------------------------------------------------------------------------------------------

//Q3

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 1000); // here i*1000 i is outside call back function so it doesnt have closure
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
// Q1
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// q1 and a3 are just for understanding but different questions
/*
in q3 output is 30 then after 1 sec 31 then after 1 sec 32
in q1 output is 012 is printed all at once

reason for 1 is they go into web api all at once because for loop is exacuted fast and at once

for q3
Each loop registers its setTimeout callback immediately, without waiting for the previous setTimeout to complete.
Thus, all callbacks are still scheduled to execute after 1000 milliseconds, almost simultaneously.

*/

//--------------------------------------------------------------------------------------------------------------------

// q4
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a);

//--------------------------------------------------------------------------------------------------------------------



//practice questio self
function getName(success, failure) {
  console.log("hello");
  setTimeout(() => {
    let user = { userID: 123, userName: "IBD" };
    success(user);
  }, 1000);
}

getName((user) => {
  const { userName } = user;
  console.log(userName);
});
