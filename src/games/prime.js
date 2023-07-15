import randomInteger from '../randomInt.js';
import produceLogic from '../index.js';
import isPrime from '../isPrime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isNumber = (random) => random === 2;
const doAnswer = () => {
  const question = randomInteger(1, 100);
  const division = isPrime(question);
  const correctanswer = isNumber(division) ? 'yes' : 'no';
  return [question, correctanswer];
};

const run = () => {
  produceLogic(description, doAnswer);
};

export default run;
