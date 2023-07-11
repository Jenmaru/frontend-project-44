#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import logic from '../src/index1.js';
console.log('brain-even');
console.log('');
const name = newfunc();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    logic(name);




