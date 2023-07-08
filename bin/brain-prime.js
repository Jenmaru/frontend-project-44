#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import answerFunc from '../src/index.js';
console.log('brain-prime');
console.log('');
const name = newfunc();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const evenprime = 0;
let correctnum = 0;
answerFunc(name, correctnum, evenprime);
