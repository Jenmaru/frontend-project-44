#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import readlineSync from 'readline-sync';
import randomInteger from '../src/index.js'
console.log('brain-progression');
console.log('');
const name = newfunc();
console.log("What number is missing in the progression?");
const four = 3;
let i = 0;
let q = 0;
let correct = 0;
let progression = [];
let random = randomInteger(1, 100);
let randomInv = randomInteger(1, 9);
let InvNum = 0;
for (q = 0; q < four; q++) {
    let d = randomInteger(1, 10);
  for (i = 0; i < 10; i++) {
    if (randomInv == i) {
        progression.push('..');
        InvNum = random;
        random += d;
    };
    if (randomInv != i) {
    progression.push(random);
    random += d;
    };
};
console.log('Question: ' + progression.join(' '));

let answer = readlineSync.question('Your answer: ');
if (answer == InvNum) {
    console.log("Correct!");
    correct += 1;
    progression = [];
    continue;
};
if (answer != InvNum) {
    console.log("'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + InvNum + "'");
    console.log("Let's try again, " + name + "!");
    break;
};
};
if ( correct === 3) {
    console.log('Congratulations, ' + name + '!');
};


