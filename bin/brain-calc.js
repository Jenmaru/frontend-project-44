#!/usr/bin/env node
import randomInteger from '../src/index.js'
import logic from '../src/index1.js';
import  newfunc  from '../src/cli.js';
console.log('brain-calc');
console.log('');
const name = newfunc();
console.log('What is the result of the expression?');
const answer = () => {
  const one = randomInteger(1, 100);
  const two = randomInteger(1, 100);
  const index = randomInteger(1, 3);
  let action = index - 1;
  let subtruct = one - two;
  let add = one + two;
  let multi = one * two;
  const znak = [subtruct, add, multi];
  const znak2 = ['-', '+', '*'];
  const question = one + ' ' + znak2[action] + " " + two;
  const correctanswer = znak[action];
  return [question, correctanswer];
};

logic(name, answer);

