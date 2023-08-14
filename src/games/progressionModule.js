export default function getProgression(randomNumber, count, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(randomNumber + count * i);
  }
  return progression;
}
