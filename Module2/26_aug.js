
function a(x,y = 0){    // 2,0 is printed in case of default parameter if value is not provided while calling.
    console.log(x,y);
}
a(2,3); 
a(2) // will print only 2 , undefined. ---// in this case we can provide default parameter
// a(,3) // will give error because not a valid syntax.

// es6 default variable . you can use a variable without giving value of it.