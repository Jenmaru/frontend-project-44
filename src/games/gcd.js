import randomInteger from '../randomInt.js';
import produceLogic from '../index.js';
import GCD from '../isGcd.js';

const description = 'Find the greatest common divisor of given numbers.';

const doAnswer = () => {
  const one = randomInteger(1, 100);
  const two = randomInteger(1, 100);
  const isCorrectAnswer = GCD(one, two);
  const question = `${one} ${two}`;
  return [question, String(isCorrectAnswer)];
};
const run = () => {
  produceLogic(description, doAnswer);
};

export default run;
