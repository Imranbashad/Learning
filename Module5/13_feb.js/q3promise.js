
    const getUser = () => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res({ userId: "123", name: "ABC" });
          }, 2000);
        });
      };
      
      const getPosts = (userId) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res({ postId: "4321", title: "Heyy" });
          });
        });
      };
      
      const getComments = (postId) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res({ commentId: "c_123", comment: "ohoo" });
          });
        });
      };
      
      const getLikes = (commentId) => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res({ count: 123 });
          });
        });
      };
      
      console.log("Loading....");
      getUser()
        .then((userData) => {
          console.log(userData);
          const { userId } = userData;
          return userId;
        })
        .then((userId) => {
          getPosts().then((postData) => {
            console.log(postData);
            const { postId } = postData;
            return postId;
          });
        });

       // so promises executes one after other and its better to return
    //    promises in .then rather than returning values. 
    //so that way promise chain is intact and others wait for previous 
    // promise to resolve in the above 


    /*


    Returning a Value:

When you return a value from a .then handler, 
that value is wrapped in a resolved promise and passed
 to the next .then handler.

Returning a Promise:

When you return a promise from a .then handler, the next 
.then handler waits for that promise to resolve 
and receives its resolved value.


    */