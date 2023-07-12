import newfunc from '../cli.js';
import logic from '../index1.js';
import randomInteger from '../index.js';

console.log('brain-even');
console.log('');
const name = newfunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const Number = (random) => random % 2 === 0;
const answer = () => {
  const question = randomInteger(1, 100);
  const correctanswer = Number(question) ? 'yes' : 'no';
  return [question, correctanswer];
};
const initialize = () => {
  logic(name, answer);
};

export default initialize;
