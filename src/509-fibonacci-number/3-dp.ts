// 动态规划

function fib(N: number): number {
  if (N < 2) return N;
  let [first, second] = [0, 1];
  for (let i = 2; i <= N; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};