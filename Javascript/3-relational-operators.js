'use strict';

console.log('\n[ in ]\n');

const cities = ['Kiev', 'Berlin', 'Beijing'];

console.log(0 in cities); // returns true
console.log(2 in cities); // returns true

console.log('Kiev' in cities); // returns false

console.log('length' in cities); // returns true (length is an Array property) 

const population = {
  kiev: 2.8,
  berlin: 3.4,
  beijing: 21.5
};

console.log('kiev' in population); // returns true
console.log(2.8 in population); // returns false


console.log('\n[ instanceof ]\n');

console.log(cities instanceof Array); // returns true
console.log(population instanceof Object); // returns true

const day = new Date(2017);
console.log(day instanceof Date); // returns true
