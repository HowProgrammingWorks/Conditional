'use strict';

const condition1 = 5 < 3; // Boolean false
const condition2 = 5 > 3; // Boolean true
const name = 'Ryu'; // String

// Good syntax
if (condition1) {
  console.log('5 < 3');
}
// Good syntax
condition2 ? console.log('5 > 3') : console.log(false);
// Good syntax
if (name) console.log('name exists');

// name = 'Ryu'
if (name === 'Lef') { //false
  console.log('User\'s name is Lef');
} else {
  console.log('User\'s name is ' + name);
}

// a, b - random numbers
const a = Math.round(Math.random() * 10);
const b = Math.round(Math.random() * 10);
let result;
if (a > b) {
  result = 'a > b';
} else if (a === b) {
  result = 'a = b';
} else {
  result = 'a < b';
}
console.log(result);
