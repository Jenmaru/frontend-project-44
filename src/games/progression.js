import  newfunc  from '../cli.js';
import randomInteger from '../index.js';
import logic from '../index1.js';
console.log('brain-progression');
console.log('');
const name = newfunc();
console.log("What number is missing in the progression?");
const answer = () => {
const four = 3;
let i = 0;
let q = 0;
let correct = 0;
let progression = [];
let random = randomInteger(1, 100);
let randomInv = randomInteger(1, 9);
let InvNum = 0;
for (q = 0; q < four; q++) {
    let d = randomInteger(1, 10);
  for (i = 0; i < 10; i++) {
    if (randomInv == i) {
        progression.push('..');
        InvNum = random;
        random += d;
    };
    if (randomInv != i) {
    progression.push(random);
    random += d;
    };
};
return [progression.join(' '), InvNum];
};
};

const initialize = () => {
logic(name, answer);
};

export default initialize;


