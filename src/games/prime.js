import getRandomNumber from '../utils.js';
import startEngine from '../index.js';
import getPrime from './getPrime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumber = (random) => random === 2;
const getRound = () => {
  const question = getRandomNumber(1, 100);
  const isPrime = isNumber(getPrime(question)) ? 'yes' : 'no';
  return [question, isPrime];
};

const run = () => {
  startEngine(description, getRound);
};

export default run;
