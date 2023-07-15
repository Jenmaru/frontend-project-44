export default function doOperation(num1, num2, index) {
  const add = num1 + num2;
  const subtruct = num1 - num2;
  const multi = num1 * num2;
  const sign = [add, subtruct, multi];
  return sign[index];
}
