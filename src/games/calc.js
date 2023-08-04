import getRandomInteger from '../getRandomInteger.js';
import produceLogic from '../index.js';
import calculate from '../getSign.js';

const description = 'What is the result of the expression?';

const getRound = () => {
  const number1 = getRandomInteger(1, 100);
  const number2 = getRandomInteger(1, 100);
  const operators = ['+', '-', '*'];
  const index = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${number1} ${index} ${number2}`;
  const correctAnswer = calculate(number1, number2, index);
  return [question, String(correctAnswer)];
};
const run = () => {
  produceLogic(description, getRound);
};

export default run;
