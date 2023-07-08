#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import answerFunc from '../src/index.js';
console.log('brain-even');
console.log('');
const name = newfunc();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
const evenprime = 1;
let correctnum = 0;
answerFunc(name, correctnum, evenprime);


