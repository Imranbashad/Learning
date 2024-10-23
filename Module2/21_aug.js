// brick sort algorithm
// write code for brick sort algorithm

//--------------------------------------------------------------------------------------------------------------
// another way for solving ASsorting4 question
// recursion1                                                                            1:37
let arr = [2, 1, 3, 4];
let l = 3;
arr.sort();
let count = 0;
for (let i = 0; i < arr.length - 2; i++) {
  let x = arr[i];
  for (let k = i + 2; k < arr.length; k++) {
    let z = arr[k];
    if (z - x <= l) {
      count += k - i - 1;
    }
  }
}
console.log(count);

// how do we get this logic ? by practice and it takes Time. we dont get this first time only . read questions
// properly and take hints . sometimes you have to see others ConvolverNode.
//--------------------------------------------------------------------------------------------------------------------
// reversing subarray 
// find all subarrays and then reverse subarray and chek if array is sorted or not.
// reverse a subarray                                                                           2:00
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (N) => {
	rl.on('line', a => {
		const arr = a.split(' ').map(Number);
		const result = solve(N, arr);
		console.log(result ? 'Yes' : 'No');
		rl.close();
	})
});
function solve(N, arr) {
	// Write your code here
	let s = -1;
	for (let i = 0; i < N; i++) {
		if (arr[i + 1] < arr[i]) {
			s = i;
			break;
		}
	}
	if (s === -1) {
		return true;
	}
	let e = -1;
	for (let i = 0; i < N; i++) {
		if (arr[i - 1] > arr[i]) {
			e = i;
			break;
		}
	}
	let isDecline = true;
	// should be just i<e not i<= e check again properly.
	for (let i = s; i <= e; i++) {
		if (arr[i + 1] > arr[i]) {
			isDecline = false;
			return isDecline;
		}
	}
	if (arr[s - 1] > arr[e]) {
		return false;
	}
	if (arr[s] > arr[e + 1]) {
		return false;
	}
	return isDecline;
}
