#!/usr/bin/env node
import randomInteger from '../src/index.js'
import readlineSync from 'readline-sync';
import  newfunc  from '../src/cli.js';
console.log('brain-calc');
console.log('');
newfunc();
console.log('What is the result of the expression?');
const four = 3;
let i = 0;
let correct = 0;
let q = RandomFor();
console.log(q);
const znak = ['-', '+', '*'];
for (i = 0; i < four; i++) {
  let multiplier = randomInteger(1, 100);
  let multiply = randomInteger(1, 100);
  let action = randomInteger(1, 3);
  if (action == 1) {
    console.log(multiply + ' ' + znak[0] + ' ' + multiplier);
    let answer = readlineSync.question('Your answer: ');
    if (answer == (multiply - multiplier)) {
        console.log('Correct!');
        correct += 1;
    }
    else {
        let result = multiply - multiplier;
        console.log("'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + result + "'" + '.');
        console.log("Let's try again, " + name + '!');
        break;
    }
  }
  if (action == 2) {
    console.log(multiply + ' ' + znak[1] + ' ' + multiplier);
    let answer = readlineSync.question('Your answer: ');
    if (answer == (multiply + multiplier)) {
        console.log('Correct!');
        correct += 1;
    }
    else {
        let result = multiply + multiplier;
        console.log("'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + result + "'" + '.');
        console.log("Let's try again, " + name + '!');
        break;
    }
  }
  if (action == 3) {
    console.log(multiply + ' ' + znak[2] + ' ' + multiplier);
    let answer = readlineSync.question('Your answer: ');
    if (answer == (multiply * multiplier)) {
        console.log('Correct!');
        correct += 1;
    }
    else {
        let result = multiply * multiplier;
        console.log("'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + result + "'" + '.');
        console.log("Let's try again, " + name + '!');
        break;
    }
  }
}
if (correct === 3) {
    console.log('Congratulations, ' + name + "!");
};

