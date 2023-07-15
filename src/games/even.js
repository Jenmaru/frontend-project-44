import randomInteger from '../randomInt.js';
import produceLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isNumber = (random) => random % 2 === 0;
const doAnswer = () => {
  const question = randomInteger(1, 100);
  const correctanswer = isNumber(question) ? 'yes' : 'no';
  return [question, correctanswer];
};
const run = () => {
  produceLogic(description, doAnswer);
};

export default run;
