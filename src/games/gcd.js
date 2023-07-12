import newfunc from '../cli.js';
import logic from '../index1.js';
import randomInteger from '../index.js';

function GCD(x, y) {
  if (y > x) return GCD(y, x);
  if (!y) return x;
  return GCD(y, x % y);
}
console.log('brain-gcd');
console.log('');
const name = newfunc();
console.log('Find the greatest common divisor of given numbers.');

const answer = () => {
  const one = randomInteger(1, 100);
  const two = randomInteger(1, 100);
  const correctanswer = GCD(one, two);
  const question = `${one} ${two}`;
  return [question, String(correctanswer)];
};
const initialize = () => {
  logic(name, answer);
};

export default initialize;
