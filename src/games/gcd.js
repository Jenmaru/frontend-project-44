import getRandomInteger from '../getRandomInteger.js';
import produceLogic from '../index.js';
import GCD from '../getGCD.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const one = getRandomInteger(1, 100);
  const two = getRandomInteger(1, 100);
  const isCorrectAnswer = GCD(one, two);
  const question = `${one} ${two}`;
  return [question, String(isCorrectAnswer)];
};
const run = () => {
  produceLogic(description, getRound);
};

export default run;
