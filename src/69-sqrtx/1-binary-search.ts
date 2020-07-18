// 二分查找法
function mySqrt(x: number): number {
  if (x < 2) return x;
  let [lower, upper] = [1, x / 2];
  while (lower <= upper) {
    const mid = Math.floor(lower + (upper - lower) / 2);
    const square = mid ** 2;
    const square_next = (mid + 1) ** 2;
    if (square === x) return mid;
    if (square < x && square_next > x) return mid;
    if (square < x) {
      lower = mid + 1;
    } else {
      upper = mid - 1;
    }
  }
  return lower;
};