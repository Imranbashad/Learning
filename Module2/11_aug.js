
// string is primitive 
/* once it is created it can not be changed.(immutable). if we assign a new 
    value is is stored in another space. and old remains in same space and collected as
    garbage.

    strings are immutable you cannot change it. we have to do operation on it and then 
    assign it to a new variable(output). 

    js mamorey management - google

    ` ` multiple lines strings
*/

let str1 = 'Accio is teaching Mern';
let str2 = 'includes different stacks';

let word = `${str1} ${str2}`

let array = word.split(' ')
str1.trim(); //removes extra spaces before and end of word.
//split uses delimitter. delimmiter can be anything " " or - or _ or @ or # etc,.
// it excludes and splits the word
// console.log(array)
//-------------------------------------------------------------------------

//all charecters have decimal values. ascii values . utf-8.
//even numbers have decimal values.
// A-Z 65-90 / a-z 97-122

let char = 'ABCDEFGHI';
let ascii = char.charCodeAt(3); // if index is not passed then defalut is 0
// console.log(ascii); 
//-----------------------------------------------------------------------------
let str = 'IMRAN';
let str3 = 'imran'
for(let i =0;i<str.length;i++){
    let ascii = str.charCodeAt(i);
    // console.log(ascii2)
    console.log(ascii-64)
}
for(let i =0;i<str3.length;i++){
    let ascii2 = str3.charCodeAt(i);
    // console.log(ascii2)
    console.log(ascii2-96)
}

//-------------------------------------------------------------------------------
let numm = 64;
let charr = String.fromCharCode(numm+2);
console.log(charr)
//-------------------------------------------------------------------------------

let namee = 'imranBasha';

let sub = namee.slice(1,3);  //takes start and end value and prints substring till endvalue--1; if second is not given it prints till end.
let sub2 = namee.slice(-2); // negetive values gives string from last position -1 is a, -2 is h and so on ...... so output is ha. 
console.log(sub,sub2);
console.log("----------------");