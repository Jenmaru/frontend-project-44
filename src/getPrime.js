export default function getPrime(question) {
  let q = 0;
  let division = 0;
  let dividenum = 0;
  for (q = 0; q <= question; q += 1) {
    dividenum += 1;
    if (question % dividenum === 0) {
      division += 1;
    }
  }
  return division;
}
