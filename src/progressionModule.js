import randomInteger from './randomInt.js';

export default function doProgression(progression) {
  let i = 0;
  let randomInt = randomInteger(1, 100);
  const progCount = randomInteger(1, 10);
  for (i = 0; i < 10; i += 1) {
    progression.push(randomInt);
    randomInt += progCount;
  }
  return progression;
}
