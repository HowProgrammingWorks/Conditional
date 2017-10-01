'use strict';

const condition1 = 5 < 3; // Boolean false
const condition2 = 5 > 3; // Boolean true
const a = 'Some text';    // String

if (condition1) {
  console.log('5 < 3');
}

if (condition2) {
  console.log('5 > 3');
}

if (a) {
  console.log('a exists');
}


//Example

const arr = setArray(20); // Array of 20 items
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min); // Returns minimal number in array


function setArray(n) { // Creates array with random values
  const arr = Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.round((Math.random()) * 100);
  }
  return arr;
}
