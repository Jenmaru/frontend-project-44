#!/usr/bin/env node
import  newfunc  from '../src/cli.js';
import randomInteger from '../src/index.js';
import readlineSync from 'readline-sync';
console.log('brain-prime');
console.log('');
const name = newfunc();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let correctnum = 0;
const four = 3;
    let i = 0;
    let q = 0;
    for (i = 0; i < four; i++) {  
        let random = randomInteger(1, 100);
        console.log('Question: ' + random);
        let answer = readlineSync.question('Your answer: ');
        let correct = '';
        let dividenum = 0;
        let division = 0;
        for (q = 0; q <= random; q++) {
            dividenum += 1;
            if (random % dividenum === 0) {
                division += 1;
            }
          }
        if (division === 2) {
          correct = 'yes';
        };
        if (division !== 2) {
          correct = 'no';
        }; 
        if (answer === correct) {
          console.log('Correct!');
          correctnum += 1;
          }
          else { 
          console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + correct + "'" + ".");
          console.log("Let's try again, " + name + "!");
          break;
          }
          if (correctnum === 3) {
            console.log('Congratulations, ' + name + "!");
          };
    };
