import getRandomNumber from '../utils.js';
import startEngine from '../index.js';
import getOperator from './getSign.js';

const description = 'What is the result of the expression?';

const getRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = getOperator(number1, number2, operator);
  return [question, String(answer)];
};
const run = () => {
  startEngine(description, getRound);
};

export default run;
