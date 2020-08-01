function minPathSum(grid: number[][]): number {
  // F[i][j] = Math.min(F[i - 1][j], F[i][j - 1]) + grid[i][j];
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) dp[j] = grid[i][j];
      else if (i === 0) dp[j] = grid[i][j] + dp[j - 1];
      else if (j === 0) dp[j] = grid[i][j] + dp[j];
      else dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
    }
  }

  return dp[dp.length - 1];
};