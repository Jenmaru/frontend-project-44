#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import readlineSync from 'readline-sync';
import randomInteger from '../src/index.js'
console.log('brain-even');
console.log('');
const name = newfunc();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
const four = 3;
let i = 0;
let correctnum = 0;
for (i = 0; i < four; i++) {  
  let random = randomInteger(1, 100);
  console.log('Question: ' + random);
  let answer = readlineSync.question('Your answer: ');
  let correct = '';
  if (random % 2 === 0) {
    correct = 'yes';
  };
  if (random % 2 !== 0) {
    correct = 'no';
  };
  
}
if (correctnum === 3) {
    console.log('Congratulations, ' + name + "!");
};
