/*  API takes request from frontend to backend vice versa. (Application Programming interface)
 api return a promise from backend and we have to handle it .
 it basically set of rules for different softwares to communicate

API - get, post, put, patch, delete

get - get all the data from server
post - certain conditions based ( > age 24) / send some data to server to create a resource
put - is for updating row /  update an existing resource completely
patch - is for updating column / updates a part of existing resource
delete - delete resource from server
*/

const url = "https://api.agify.io/?name=Imran";     // default method is GET if we dont specify
fetch(url)
.then((res) => res.json())
.then((data)=> {
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})

// ----------------------------------------------------------------------------------------------------------------------
// syntax is same for put / post / patch / delete only method changes
// visualizer for api metthod updating 
// post method
fetch("https://jsonplaceholder.typicode.com/posts", {
    method : 'POST',
    headers : { "content-Type": 'application/json'},  // if we dont menttion json/object then it doesnt know what to coenvert data into
    // the sent string is converted to json and injected to database and return full object otherwise only id is returned
    body : JSON.stringify({                           // here backend receives a string
        title: "foo",
        userId: 1,
    })
})
.then((res) => res.json())
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})
// 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your_access_token"
    },
    body: JSON.stringify({
        query: "example search",
        filters: {
            category: "technology",
            dateRange: "lastMonth"
        }
    })
})
.then((response) => response.json())
.then((data) => {
    console.log("Search Results:", data);
})
.catch((error) => {
    console.error("Error:", error);
});
// -----------------------------------------------------------------------------------------------------------------------------------

// =======================================================================================================================================
// client storage helps in accessing of data faster
/*  
    Local storage - helps in storing data. and can be accessed accros different tabs in same browser
    -it stores data in key-value pair
    -it stores data even after browser is closed some data can be retrieved
    -we can acces data across different tabs

    Session storage - stores data but limited to one tab
    - if we reload page or cloose browser data is gone.

    Coockie Storage - stores data tempaeroly
    ex:  bank websites detect mouse movemtnts and logout if no moment is detected by storing expiry in cookies.

    storage limit for local and session is 5MB || and cookie is 4kb 

*/

// Store the value "Nemesis" with the key "name"
localStorage.setItem("name", "Nemesis");

// Retrieve the value associated with the key "name"
const na = localStorage.getItem("name");
console.log(na); // This should log "Nemesis" to the console

localStorage.removeItem('name')

//  local storage soesnt have expiration and we need manual clearance.
//--------------------------------------------------------------------------------------------------

// check these in broswser console

sessionStorage.setItem('name','batman');
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
// ------------------------------------------------------------------------------------------------------
// to add a cookie we have to be on page  in browser
document.cookie = 'user=batman; expires=fri; path=/';
document.cookie; // to get cookie 
document.cookie.split(';')
//  to delet a cookie we have to add proper expires
// ----------------------------------------------------------------------------------------------------

// ================================================================================================================================

//   -----------------------------------------------Dom Manipulation --------------------------------------------------

// Getting an element by ID
const elementById = document.getElementById('elementId');

// Getting elements by class name
const elementsByClassName = document.getElementsByClassName('className');

// Getting elements by tag name
const elementsByTagName = document.getElementsByTagName('tagName');

// Querying a single element using CSS selector
const singleElement = document.querySelector('.className');

// Querying multiple elements using CSS selector
const multipleElements = document.querySelectorAll('.className');

// Getting elements by name attribute (commonly used in forms)
const elementsByName = document.getElementsByName('nameAttribute');

// Event Listener Example - Click
document.querySelector('button').addEventListener('click', function() {
  alert('Button clicked!');
});

//------------------------------------------------------------------------------------------------------------------------------


document
.getElementById("userForm")
.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Get the input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Validate inputs are not empty
  if (name === "" || age === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Create a new promise for the form submission
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // Resolve or reject after 4 seconds
  })
    .then(function () {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(function () {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});