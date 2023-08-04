export default function getProgression(randomNumber, progressionCount, progressionLength) {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(randomNumber + progressionCount * i);
  }
  return progression;
}
