import getRandomInteger from '../getRandomInteger.js';
import produceLogic from '../index.js';
import getProgression from '../progressionModule.js';

const description = 'What number is missing in the progression?';
const getRound = () => {
  const lastNumber = 100;
  const firstNumber = getRandomInteger(1, lastNumber);
  const maxProgressionCount = 10;
  const progressionLength = 10;
  const progressionCount = getRandomInteger(1, maxProgressionCount);
  const progression = getProgression(firstNumber, progressionCount, progressionLength);
  const hiddenNum = '..';
  const hiddenPos = getRandomInteger(0, progression.length - 1);
  const answer = progression[hiddenPos];
  progression.splice(hiddenPos, 1, hiddenNum);
  return [progression.join(' '), String(answer)];
};

const run = () => {
  produceLogic(description, getRound);
};

export default run;
