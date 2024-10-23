/*
sorting1 1:18 maxfrequency quesstion.
sorting is arranging the things in assending or descinding order.
Ex: names , numbers, products , sizes .....etc.,
*/
//--------------------------------------------------------------------------------------------
let arr = [4,6,2,8,-2,6];

let max = arr[0];
let maxpos = -1;
//find max from array
for(let i = 1;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
        maxpos = i;
    }
}
console.log(max,maxpos);
//find min from array
let min = arr[0];
let minpos = -1;
for(let i = 1;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i];
        minpos = i;
    }
}
console.log(min,minpos);
console.log('------------------------------------------')
//---------------------------------------------------------------------------------------------------------