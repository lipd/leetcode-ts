// 记忆化搜索

function fib(N: number): number {
  const memo: any = {};
  function recursion(N: number): number {
    if (N < 2) return N;
    if (!memo[N]) memo[N] = recursion(N - 1) + recursion(N - 2);
    return memo[N];
  }
  return recursion(N);
};