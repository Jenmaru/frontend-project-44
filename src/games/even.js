import getRandomNumber from '../utils.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (random) => random % 2 === 0;
const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const run = () => {
  startEngine(description, getRound);
};

export default run;
