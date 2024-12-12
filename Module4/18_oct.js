// state basically tells you the current state of program stored.
// example: cart items, current login state., etc
// its important for dynamic and interactivity

//---------------------------------------------------
const username = " ";
const isValid = false / true;
const errorMessage = "Enter valid username";

const passwrod = " ";
const isValidpass = false / true;
const errorMessagepass = "Enter valid password";

// here we create 6 variables

//--------------------------------------------------

// here only 2 variables (middle approach) better appraoch than others
const userStatus = {
  username: " ",
  isValid: false / true,
  errorMessage: "Enter valid username",
};

const passwordStatus = {
  passwrod: " ",
  isValid: false / true,
  errorMessage: "Enter valid password",
};
//--------------------------------------------------
//here only 1 variable
const status = {
  userStatus: {
    username: " ",
    isValid: false,
    errorMessage: "Enter valid username",
  },
  passwordStatus: {
    password: " ",
    isValid: false,
    errorMessage: "Enter valid password",
  },
};
//--------------------------------------------------
//=================================================================================================================
//how to manage state management

// when variable are dependent on other variable then objects/arrays are recomended(above example)
//else use single variable

// redux, context api, zustand ( learn more about state management)

//-----------------------------------------------------------------------------------------
//how to do statemanagement in asynchronus operation

// Promise.then((data) =>{
//     state = data        // always update state when promise is resolved. this will not break app when ui load etc.,
// }).catch((error) => {
//     console.log(error)
// })


// try to use global variable very LESS as musch as possible. sometime this creates a problems.

var i = 5;
const add = () =>{
    console.log(5+i);
}

const sub = () =>{
    for(i = 0;i<5;i++){
        console.log(i)
    }
}

// add();
sub();
add();







//===================================================================================================