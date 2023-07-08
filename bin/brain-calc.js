#!/usr/bin/env node
import randomInteger from '../src/index.js'
import readlineSync from 'readline-sync';
import  newfunc  from '../src/cli.js';
console.log('brain-calc');
console.log('');
const name = newfunc();
console.log('What is the result of the expression?');
const four = 3;
let i = 0;
let correct = 0;
const znak = ['-', '+', '*'];
for (i = 0; i < four; i++) {
  let TwoNum = randomInteger(1, 100);
  let OneNum = randomInteger(1, 100);
  let action = randomInteger(1, 3);
  let Intmass = action - 1;
  let subtruct = OneNum - TwoNum;
  let add = OneNum + TwoNum;
  let multi = OneNum * TwoNum;
  const znak2 = [subtruct, add, multi];
    console.log(OneNum + ' ' + znak[Intmass] + ' ' + TwoNum);
    let answer = readlineSync.question('Your answer: ');
    if (answer == znak2[Intmass]) {
        console.log('Correct!');
        correct += 1;
    }
    else {
        let result = znak2[Intmass];
        console.log("'" + answer + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + result + "'" + '.');
        console.log("Let's try again, " + name + '!');
        break;
    }
  }
if (correct === 3) {
    console.log('Congratulations, ' + name + "!");
};

