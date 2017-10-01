'use strict';

// a, b - random numbers
const a = Math.round(Math.random() * 10);
const b = Math.round(Math.random() * 10);
console.log(a + '   ' + b);

if (a > b) {
  console.log('a > b');
} else if (a === b) {
  console.log('a = b');
} else {
  console.log('a < b');
}
