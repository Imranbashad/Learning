// sorting2

let arr = [5,6,8,9,3,2];
arr.sort((a,b)=>a-b);
console.log(arr);

// onject help us to store unique things as a dictionary.

let arr2 = [4,3,2,3,5,7,9,0,0,8,6,6];
let obj = {};

for(let i = 0;i<arr2.length;i++){
    let curr = arr2[i];
    obj[curr] = 1;
}
console.log(obj);

let object = {};
object.name = 'Imran'
object.age = 27
object.work = 'IT';

for(let key in object){
    console.log(key,object[key]);
}
