import getRandomNumber from '../utils.js';
import startEngine from '../index.js';
import getGcd from './getGCD.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const one = getRandomNumber(1, 100);
  const two = getRandomNumber(1, 100);
  const answer = getGcd(one, two);
  const question = `${one} ${two}`;
  return [question, String(answer)];
};
const run = () => {
  startEngine(description, getRound);
};

export default run;
