export default function RandomFor() {
  let i = 0;
  let four = 3;
for (i = 0; i < four; i++) {
    function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  return randomInteger(1, 100);
};

};