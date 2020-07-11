// 递归法

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  const halfPow = n % 2 ? myPow(x, (n - 1) / 2) : myPow(x, n / 2);
  return n % 2 ? halfPow * halfPow * x: halfPow * halfPow;
};