'use strict';

const tea = true;
const juice = true;

const vodka = false;
const beer = false;

const goodDrinks = tea && juice; // true
const badDrinks = vodka && beer; // false
const badMix = vodka && juice; // false

console.log('...Logical operator AND (&&)...');

console.log('Mix of Tea AND Juice is ' + goodDrinks);
console.log('Mix of Vodka AND Beer is ' + badDrinks);
console.log('Mix of Vodka AND Juice is ' + badMix);

const logicalAndFirstFalse = 'string' && 0 && 10; // 0
console.log('\'string\' && 0 && 10 => ' + logicalAndFirstFalse);

const logicalAndLastTrue = 'string' && 5 && 10; // 10
console.log('\'string\' && 5 && 10 => ' + logicalAndLastTrue);

const engine1 = true;
const engine2 = false;

const fly = engine1 || engine2; // true

console.log('...Logical operator OR (||)...');

console.log('The first engine works? - ' + engine1);
console.log('The second engine works? - ' + engine2);
console.log('Is the plane still flying? - ' + fly);

const logicalOrFirstTrue = 'string' || 0 || 10; // 'string'
console.log('\'string\' || 0 || 10 => ' + logicalOrFirstTrue);

const logicalOrLastFalse = '' || null || 0; // 0
console.log('\'\' || null || 0 => ' + logicalOrLastFalse);

const happy = true;

const mood = !happy; // false

console.log('...Logical operator NOT (!)...');

console.log('Is he happy? - ' + mood);
