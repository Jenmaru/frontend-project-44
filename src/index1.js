import readlineSync from 'readline-sync';
const rounds = 3;
let i = 0;
let correctnum = 0;
const logic = (name, correct) => {
for (i = 0; i < rounds; i += 1) {
    let [question, correctanswer] = correct();
    console.log('Question: ' + question);
    let answer = readlineSync.question('Your answer: ');
    
    if (answer === correctanswer) {
        console.log('Correct!');
        correctnum += 1;
        }
      if (answer !== correctanswer) { 
        console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + correctanswer + "'" + ".");
        console.log("Let's try again, " + name + "!"); 
        break;
        }
        }
        if (correctnum === 3) {
            console.log('Congratulations, ' + name + "!");
          };
    };

    export default logic;
    