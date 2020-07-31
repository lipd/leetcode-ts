const cash: Map<number | undefined, number> = new Map()

function climbStairs(n: number): number {
  if(n <= 2) return n;
  if (cash.get(n)) return cash.get(n) as number;

  const res = climbStairs(n - 1) + climbStairs(n - 2);
  cash.set(n, res);
  return res;
};