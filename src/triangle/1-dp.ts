// 动态规划

function minimumTotal(triangle: number[][]): number {
  const level = triangle.length;
  if (level === 1) return triangle[0][0];
  const dp: number[] = triangle[level - 1];
  for (let i = level - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};