import getRandomNumber from '../utils.js';
import startEngine from '../index.js';

function getProgression(randomNumber, count, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(randomNumber + count * i);
  }
  return progression;
}

const description = 'What number is missing in the progression?';
const getRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const maxProgressionCount = 10;
  const progressionLength = 10;
  const progressionCount = getRandomNumber(1, maxProgressionCount);
  const progression = getProgression(firstNumber, progressionCount, progressionLength);
  const hiddenNum = '..';
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = hiddenNum;
  return [progression.join(' '), String(answer)];
};

const run = () => {
  startEngine(description, getRound);
};

export default run;
