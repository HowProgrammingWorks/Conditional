'use strict';

// a, b - random numbers
const a = Math.round(Math.random() * 10);
const b = Math.round(Math.random() * 10);
let str;

if (a > b) {
  str = 'a > b';
} else if (a === b) {
  str = 'a = b';
} else {
  str = 'a < b';
}

console.log(a + '   ' + b);
console.log(str);
