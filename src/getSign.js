export default function calculate(number1, number2, index) {
  let sign;
  switch (index) {
    case '+': sign = number1 + number2;
      break;
    case '-': sign = number1 - number2;
      break;
    case '*': sign = number1 * number2;
      break;
    default: break;
  }
  return sign;
}
