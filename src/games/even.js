import getRandomInteger from '../getRandomInteger.js';
import produceLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumber = (random) => random % 2 === 0;
const getRound = () => {
  const question = getRandomInteger(1, 100);
  const correctanswer = isNumber(question) ? 'yes' : 'no';
  return [question, correctanswer];
};
const run = () => {
  produceLogic(description, getRound);
};

export default run;
