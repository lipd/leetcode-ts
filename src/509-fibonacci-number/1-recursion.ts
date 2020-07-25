// 递归

function fib(N: number): number {
  if (N < 2) return N;
  return fib(N - 1) + fib(N - 2);
};