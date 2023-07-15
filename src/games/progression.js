import randomInteger from '../randomInt.js';
import produceLogic from '../index.js';
import doProgression from '../progressionModule.js';

const description = 'What number is missing in the progression?';
const doAnswer = () => {
  const hiddenPos = randomInteger(0, 9);
  const progression = [];
  const hiddenNum = '..';
  doProgression(progression);
  const trueNum = progression[hiddenPos];
  progression.splice(hiddenPos, 1, hiddenNum);
  return [progression.join(' '), String(trueNum)];
};

const run = () => {
  produceLogic(description, doAnswer);
};

export default run;
