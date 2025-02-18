//prolmise chaining example
// const input = parseInt(prompt('enter number'))

const input = 2;
const promise = new Promise( (resolve,reject) =>{
    if(input%2 ===0){
        resolve("even")
    }else{
        reject("odd")
    }
})
promise.then((data) =>{
    console.log(data)
    return data+2
}).then((data)=>{
    console.log(data)
}).catch((err) =>{
    console.log(err)
})

 // the below code is same as above just storing in another variable
// const newPromise = promise.then((data) =>{
//     console.log(data)
//     return data+2
// })

// newPromise.then((data)=>{
//     console.log(data)
// }).catch((err) =>{
//     console.log(err)
// })


// promise chaining example
function getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { name: "ABC", userId: "321" };
        resolve(user);
      }, 1000);
    });
  }

  // a promise wil either resolve or reject but nnot both we should not reject with less time than resolve it will always rejects.

  function getPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let posts = [{ title: "Study", postId: "123" }];
        resolve(posts);
      }, 1000);
    });
  }
  
  function getComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const comments = [{ comment: "Yoo!!", commentId: "091" }];
        resolve(comments);
      }, 1000);
    });
  }
  
  getUser()
    .then((user) => {
      console.log(user);
      return getPosts(user.userId);
    })
    .then((posts) => {
      const firstPost = posts[0];
      console.log(posts)
      return getComments(firstPost.postId);
    })
    .then((comments) => {
      console.log(comments);
    })
    .catch((error) => {
      console.log(error);
    });
  


    
    