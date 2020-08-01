// 动态规划

function maxSubArray(nums: number[]): number {
  const dp: number[] = [...nums];
  for (let i = 1; i < nums.length; i++) {
    dp[i] += Math.max(dp[i - 1], 0);
  }
  return Math.max(...dp);
};