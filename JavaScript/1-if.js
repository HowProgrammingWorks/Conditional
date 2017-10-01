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

if (a.isNull()) {
  console.log('a exists');
}
