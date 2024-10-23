const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    readline.question('', arr => {
      arr = arr.split(' ').map(Number);
      let ans = ArrayProblem6(n, arr);
      console.log(ans);
      readline.close();
    });
  });
  
  function ArrayProblem6(n, arr) {
    let difference = Infinity;
    let evenNumbers = [];
  
    // Collect all even numbers with detailed debugging
    for (let i = 0; i < n; i++) {
      console.log(`Checking element ${arr[i]} at index ${i}`);
      if (arr[i] % 2 === 0) {
        console.log(`Element ${arr[i]} is even`);
        evenNumbers.push(arr[i]);
      } else {
        console.log(`Element ${arr[i]} is odd`);
      }
    }
  
    // Debug: Print even numbers
    console.log("Even numbers collected:", evenNumbers);
  
    // If there are less than 2 even numbers, return -1
    if (evenNumbers.length < 2) {
      return -1;
    }
  
    // Find the smallest difference between any two even numbers
    for (let i = 0; i < evenNumbers.length; i++) {
      for (let j = i + 1; j < evenNumbers.length; j++) {
        let diff = Math.abs(evenNumbers[i] - evenNumbers[j]);
        if (diff < difference) {
          difference = diff;
        }
      }
    }
  
    return difference;
  }
  