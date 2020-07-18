// 贪心算法

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let [g_index, s_index] = [0, 0];
  while (g_index < g.length && s_index < s.length) {
    if (g[g_index] <= s[s_index]) {
      g_index++; s_index++;
    } else {
      s_index++;
    }
  }
  return g_index;
};