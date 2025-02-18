// promise is an object which tells eventuall completion of async task  and its resulting value ( data/error)

// inside promise call back function is synchronus

// const prom = new Promise()  // promise constructor
const p = new Promise((resolve, reject) => {
  // promise is a synchronus code
  // inside this synchronus we can also write asynchronus
  setTimeout(() => {
    let data = "hey";
    resolve(data);
  }, 3000);
});

p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finished");
});

//promises solves callback hell problem
/* in callbacks we can not use variables outside the function nested . but with promises we can return adn then use them when 
necessary and also code is readable ( parallel not nested)

*/
// reasd about chained promise