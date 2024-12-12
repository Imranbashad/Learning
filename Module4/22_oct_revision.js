// NPM is basically a place we can host our code and other devs can use our code in their project//

//npm vs pnpm vs yarn

// pnpm is fastest among three due to unique approach to manage node modules
// ----------------------------------------------------------------------------------------------------
//Destructuring
const user = {
  firstName: "Bruce",
  profession: "vigilante",
  adress: {
    city: "Gotham city",
    pincode: 43234,
  },
  hobbies: {
    one: "buying banks for fun",
    extras: {
      vehicle: "batmobile",
    },
  },
};
//destructuring is more helpfull when there is deep nested objects 
const {
  firstName,
  profession,
  adress: { city, pincode },
  hobbies: {                                // destructuring of objects...
    one,
    extras: { vehicle },
  },
} = user;


const details = () =>{
    let name = user.firstName;          //without destruction we create more variables 
    if(name){
        console.log(name)
    }
}

const details2 = () =>{
    if(firstName){
        console.log(firstName)          // by destructuring we can directly use key name 
    }
}

details();
details2();


// ============================================================================================================

//api connects frontend and backend

fetch('url', {
  method:'POST',
  body: JSON.stringify()
}).then( res =>{
  res.json 
}).then(data =>{
  console.log(data);
}).catch(error =>{
  console.log(error)
})


