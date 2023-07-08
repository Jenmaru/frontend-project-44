import readlineSync from 'readline-sync';
export default function answerFunc(name, correctnum, evenprime) {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
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
          if (evenprime === 0) {
            if (division === 2) {
              correct = 'yes';
            };
            if (division > 2) {
              correct = 'no';
            };      
          }
          if (evenprime === 1) {
        if (random % 2 === 0) {
          correct = 'yes';
        };
        if (random % 2 !== 0) {
          correct = 'no';
        };  
      }    
if (answer === correct) {
console.log('Correct!');
correctnum += 1;
}
else { 
console.log("'" + answer + "'" + " is wrong answer ;(. Correct answer was " + "'" + correct + "'" + ".");
console.log("Let's try again, " + name + "!");
break;
}
};
if (correctnum === 3) {
    console.log('Congratulations, ' + name + "!");
};
};


