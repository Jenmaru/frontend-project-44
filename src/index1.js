import readlineSync from 'readline-sync';
export default function logic(name, correct, correctnum) {
    let i = 0;
    for (i = 0; i < 1; i ++) {
    let answer = readlineSync.question('Your answer: ');
        if (answer === correct) {
          console.log('Correct!');
          return correctnum += 1;
          }
        if (answer !== correct) { 
          console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + correct + "'" + ".");
          console.log("Let's try again, " + name + "!"); 
          return false;
          }
        }
    };