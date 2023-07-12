#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import randomInteger from '../src/index.js';
import logic from '../src/index1.js';
console.log('brain-even');
console.log('');
const name = newfunc();
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
let correctnum = 0;
    const four = 3;
    let i = 0;
    for (i = 0; i < four; i++) {  
        let random = randomInteger(1, 100);
        console.log('Question: ' + random);
        let correct = '';
        if (random % 2 === 0) {
          correct = 'yes';
        };
        if (random % 2 !== 0) {
          correct = 'no';
        }; 
        logic(name, correct, correctnum);
          if (correctnum === 3) {
            console.log('Congratulations, ' + name + "!");
          };
        };





