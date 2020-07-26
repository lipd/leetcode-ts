function uniquePaths(m: number, n: number): number {
  // 将最下面一行全部设为 1，用一个数组保存
  const memo = Array(m).fill(1);
  for (let i = 0; i < n - 1; i++) {
    for (let j = memo.length - 2; j >= 0; j--) {
      memo[j] += memo[j + 1];
    }
  }
  return memo[0];
}

console.log(uniquePaths(3, 2));