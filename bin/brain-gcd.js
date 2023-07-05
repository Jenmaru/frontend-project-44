#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import readlineSync from 'readline-sync';
import randomInteger from '../src/index.js';
function GCD(x, y) {
	if (y > x) return GCD(y, x);
	if (!y) return x;
	return GCD(y, x % y);
};
console.log('brain-gcd');
console.log('');
const name = newfunc();
console.log('Find the greatest common divisor of given numbers.')
const four = 3;
let i = 0;
let correct = 0;
for (i = 0; i < four; i++) {
	let one = randomInteger(1, 100);
	let two = randomInteger(1, 100);
	let divider = GCD(one, two);
	console.log('Question: ' + one + " " + two);
	let answer = readlineSync.question('Your answer: ');
	if (answer == divider) {
		console.log('Correct!');
		correct += 1;
	};
	if (answer != divider) {
		console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + divider + "'" +'.');
		console.log("Let's try again, " + name + '!');
		break;
	};
};
if (correct == 3) {
	console.log('Congratulations, ' + name + '!');
};
