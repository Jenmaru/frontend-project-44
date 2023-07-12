import  newfunc  from '../cli.js';
import randomInteger from '../index.js';
import logic from '../index1.js';
console.log('brain-prime');
console.log('');
const name = newfunc();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const Number = (random) => random === 2;
const answer = () => {
  const question = randomInteger(1, 100);
  let q = 0;
  let division = 0;
  let dividenum = 0;
  for (q = 0; q <= question; q++) {
    dividenum += 1;
    if (question % dividenum === 0) {
        division += 1;
    }
}
const correctanswer = Number(division) ? 'yes' : 'no';
return [question, correctanswer];
};


const initialize = () => {
  logic(name, answer);
};



export default initialize;