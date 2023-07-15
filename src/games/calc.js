import randomInteger from '../randomInt.js';
import produceLogic from '../index.js';
import doOperation from '../dooperation.js';

const description = 'What is the result of the expression?';
const doAnswer = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const index = randomInteger(0, 2);
  const znak2 = ['+', '-', '*'];
  const question = `${num1} ${znak2[index]} ${num2}`;
  const correctanswer = doOperation(num1, num2, index);
  return [question, String(correctanswer)];
};
const run = () => {
  produceLogic(description, doAnswer);
};

export default run;
