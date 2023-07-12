import randomInteger from '../index.js';
import logic from '../index1.js';
import newfunc from '../cli.js';

console.log('brain-calc');
console.log('');
const name = newfunc();
console.log('What is the result of the expression?');
const answer = () => {
  const one = randomInteger(1, 100);
  const two = randomInteger(1, 100);
  const index = randomInteger(1, 3);
  const action = index - 1;
  const subtruct = one - two;
  const add = one + two;
  const multi = one * two;
  const znak = [subtruct, add, multi];
  const znak2 = ['-', '+', '*'];
  const question = `${one} ${znak2[action]} ${two}`;
  const correctanswer = znak[action];
  return [question, String(correctanswer)];
};
const initialize = () => {
  logic(name, answer);
};

export default initialize;
