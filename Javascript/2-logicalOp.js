'use strict'

let tea = true;
let juice = true;

let vodka = false;
let beer = false

let goodDrinks = tea && juice; // true
let badDrinks = vodka && beer; // false
let badMix = vodka && juice;	// false

console.log('...Logical operator AND (&&)...');

console.log('Mix of Tea AND Juice is ' + goodDrinks);
console.log('Mix of Vodka AND Beer is ' + badDrinks);
console.log('Mix of Vodka AND Juice is ' + badMix);

let engine_1 = true;
let engine_2 = false;

let fly = engine_1 || engine_2; // true, because the plane needs at least one OK engine

console.log('...Logical operator OR (||)...');

console.log('The first engine works? - ' + engine_1)
console.log('The second engine works? - ' + engine_2)
console.log('Is the plane still flying? - ' + fly );

let happy = true;

let mood = !happy; // false

console.log('...Logical operator NOT (!)...');

console.log('He is happy? - ' + mood); 

