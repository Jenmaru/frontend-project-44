import getRandomNumber from '../utils.js';
import startEngine from '../index.js';

function getPrime(question) {
  let q = 0;
  let division = 0;
  let dividenum = 0;
  for (q = 0; q <= question; q += 1) {
    dividenum += 1;
    if (question % dividenum === 0) {
      division += 1;
    }
  }
  return division;
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => number === 2;
const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(getPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};

const run = () => {
  startEngine(description, getRound);
};

export default run;
