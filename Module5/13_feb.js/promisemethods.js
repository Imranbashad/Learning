/*to print all promise all at once we use promise.all 
 promise.all return a new array and also if we have many promises it will give output in order it
 is passed as parameter and not the timing it has.

 promise.all is used to handle all data at once and want to show data only when all three are resolved

 if any one promise fails it gets error. it gets data only when all promises are resolved.
 //---------------------------------------------------------

 const p = Promise.all([p1,p2,p3])       // promises are output this order and not the time it has set

p.then((data)=>{
    console.log(data)
})
 */



const p1 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("A");
    }, 2000);
  }); // 2
  
  const p2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("B");
    }, 1000);
  }); // 1
  
  const p3 = new Promise((res, rej) => {
    setTimeout(() => {
      res("C");
    }, 3000);
  }); //3
  
  const p = Promise.all([p1, p2, p3]);
  
  p.then((data) => {
    console.log(data);
  }).catch((e) => {
    console.log(e);
  });
  
  // all has to resolve to get data in an array  if any fails you get an error