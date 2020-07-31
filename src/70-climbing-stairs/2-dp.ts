function climbStairs(n: number): number {
  // F(n) = F(n - 1) + F(n - 2);
  if (n < 3) return n;
  let [s1, s2, s3] = [1, 2, 3];
  for (let i = 3; i <= n; i++) {
    s3 = s1 + s2;
    s1 = s2;
    s2 = s3;
  }
  return s3;
};