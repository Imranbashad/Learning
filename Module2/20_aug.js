// bubble sort and insertion sort are similar but in reverse order.
// sorting matrix row wise .
let matrix = [
  [3, 7, 4],
  [9, 3, 5],
  [7, 1, 3],
];

for (let k = 0; k < matrix.length; k++) {
  let arr = matrix[k];

  for (let i = 1; i < arr.length; i++) {
    let picked = arr[i];
    let j = i - 1;
    while (j >= 0 && picked < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = picked;
  }
}
console.log(matrix);
// do homework of sorting 
// bubbles// 0-1-2 and 0-2-1 and 0-1