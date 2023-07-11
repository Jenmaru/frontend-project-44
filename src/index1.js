import readlineSync from 'readline-sync';
import randomInteger from '../src/index.js';
export default function logic(name) {
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
    let answer = readlineSync.question('Your answer: ');
        if (answer === correct) {
          console.log('Correct!');
          correctnum += 1;
          }
        if (answer !== correct) { 
          console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + correct + "'" + ".");
          console.log("Let's try again, " + name + "!"); 
          break;
          }
          if (correctnum === 3) {
            console.log('Congratulations, ' + name + "!");
          };
        };
    };