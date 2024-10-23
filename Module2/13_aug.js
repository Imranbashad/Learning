//the below code also gives same output substrings

let str = 'aabbscvcscccc'

function SubString(str) {
  //Write code here
  for(let i = 0;i<str.length;i++){
      
      for(let j = i+1;j<=str.length-1;j++){
        let sub = str.slice(i,j);
        console.log(sub)
      }
      // console.log(sub.join(''))
  }
}

function SubString(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const sub = str.slice(i, j);
            console.log(sub); // Print each substring directly
        }
    }
}
// time complexity n(n(n+1)) 
console.log('---------------------------------------------------------------')

//sets contain unique values. it does not store repeated values.

let set = new Set();   // in browser console and then enter variable set. Then we can see its prototypes 

set.add('y');
set.add('a');
let out = set.has('u')

console.log(set,out)
console.log('----------------------------------------------------------------')
let nam = 'ImranBasha';
let newset = new Set();
for(let i = 0;i<nam.length;i++){
    newset.add(nam[i]);
}
console.log(newset);
console.log('----------------------------------------------------------------')
// converting array to set--------------------------------------------------------------------------------------------------
let arr = ['a', 'b','c','b']
let set2 = new Set(arr); // converting arr to set
console.log(set2)
console.log('-----------------------------------------------------------------');
//converting set to array---------------------------------------------------------------------------------------------------

let arr2 = Array.from(set2);
console.log(arr2)
//-------------------------------------------------------------------------------------------------------------------------
//solve distinct palindromic substrings in different ways 
// also check how to solve using matrix and time complexity
// Strings-4        1:31

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (s) => {
  palindromeSubStrs(s);
  rl.close();
});

function palindromeSubStrs(s) {
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    let sub = ""
    for (let j = i; j < s.length; j++) {
      sub += s[j] //creating substring here
      sub = sub.toLowerCase();
      let newstr = "";
      for (let k = 0; k < sub.length; k++) {
        if (sub[k] >= 'a' && sub[k] <= 'z') {
          newstr += sub[k]; //removing extra charecters or spaces
        }
      }
      let x = 0;
      let y = newstr.length - 1;
      let isPalindro = true;
      while (x < y) {
        if (newstr[x] === newstr[y]) { // looping array from both ends
          x++;
          y--;
        } else {
          isPalindro = false;
          break;
        }
      }
      if (isPalindro) {
        set.add(newstr);  // if it is palindrome adding it to new set
      }
    }
  }
  let arr = Array.from(set);
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//--------------------------------------------------------------------------------------------------
/*
 Ptice  strings4 -- 2:54 
 why modulous and purpose. why modlous helps to repeat the sequences. are there any other sequnces or patterns
1. repeating sequences with help of reminder 


seq = 3;

5 questions
1%3   ==1
2%3   ==2
3%3   ==0
4%3   ==1
5%seqence == 2

where we have iterate through a sequence and come back to first again then we use modulous.
ccheck for other sequences as well.
which can do the same.

another example is distriuting chocalates in a sequence 3 5 7 4 etc   2:55 Strings4
//----------------------------------------------------------------------------------------------------

*/
