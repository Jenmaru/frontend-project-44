#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('brain-even');
console.log('');
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
const four = 3;
let i = 0;
let correct = 0;
for (i = 0; i < four; i++) {
    function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  let random = randomInteger(1, 100);
  console.log('Question: ' + random);
  let answer = readlineSync.question('Your answer: ');
  if (answer !== 'yes') {
    if (answer !== 'no') {
      if (random % 2 === 0) {
        console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + name + "!");
        break;
      }
      if (random % 2 !== 0) {
        console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + name + "!");
        break;
      }
    }
  }
  if (answer === 'yes') {
    if (random % 2 === 0) {
        console.log('Correct!');
        correct += 1;
    }
    if (random % 2 !== 0) {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again, " + name + "!");
        break;
    }
  }
  if (answer === "no") {
    if (random % 2 !== 0) {
        console.log('Correct!');
        correct += 1;
    }
    if (random % 2 === 0) {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again, " + name + "!");
        break;
    }
  }
};
if (correct === 3) {
    console.log('Congratulations, ' + name + "!");
};
