import getRandomInteger from '../getRandomInteger.js';
import produceLogic from '../index.js';
import getPrime from '../getPrime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumber = (random) => random === 2;
const getRound = () => {
  const question = getRandomInteger(1, 100);
  const division = getPrime(question);
  const correctanswer = isNumber(division) ? 'yes' : 'no';
  return [question, correctanswer];
};

const run = () => {
  produceLogic(description, getRound);
};

export default run;
