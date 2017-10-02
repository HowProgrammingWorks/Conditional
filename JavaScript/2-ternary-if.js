'use strict';

const name1 = 'Ryu';
const name2 = 'Lef';

const log = name1 === name2 ? 'It\'s true' : 'It\'s false';
// The same as:
// 
// if (name1 === name2) {
//   log = 'It\'s true';
// } else {
//   log = 'It\'s false';
// }
console.log(log);


// a, b - random numbers
const a = Math.round(Math.random() * 10);
const b = Math.round(Math.random() * 10);

(a < b || a === b) ? console.log('a < b or a = b') : console.log('a > b');
