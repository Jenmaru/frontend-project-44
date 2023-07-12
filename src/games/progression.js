import newfunc from '../cli.js';
import randomInteger from '../index.js';
import logic from '../index1.js';

console.log('brain-progression');
console.log('');
const name = newfunc();
console.log('What number is missing in the progression?');
const answer = () => {
  let i = 0;
  const progression = [];
  let random = randomInteger(1, 100);
  const randomInv = randomInteger(1, 9);
  let InvNum = 0;
  const d = randomInteger(1, 10);
  for (i = 0; i < 10; i += 1) {
    if (randomInv === i) {
      progression.push('..');
      InvNum = random;
      random += d;
    }
    if (randomInv !== i) {
      progression.push(random);
      random += d;
    }
  }
  return [progression.join(' '), String(InvNum)];
};

const initialize = () => {
  logic(name, answer);
};

export default initialize;
