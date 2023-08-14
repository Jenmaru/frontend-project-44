export default function getGcd(x, y) {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
}
