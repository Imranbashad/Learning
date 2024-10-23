// back tracking is returning back to the function.
// tracing back and executing the further code.

// in recursion if you are getting 0 then increase it . if you  getting n then decrease it..

// whenever value becomes half it becomes log(x).. when it is divided..... read more.

// recursion of array

function arrRec (arr,n){
    if(n === 0){
        return
    }

    let cur = arr[n-1]
    console.log(cur);   // before function call gives reverse order or from last
    arrRec(arr,n-1)
    console.log(cur);   // after function call gives values from first
}
let arr = ['a','b','c','d']
let n = arr.length;
arrRec(arr,n)

//------------------------------------------


