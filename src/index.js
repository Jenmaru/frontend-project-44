import readlineSync from 'readline-sync';

const rounds = 3;

const produceLogic = (description, getCorrect) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = getCorrect();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default produceLogic;
