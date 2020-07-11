// 递归法

function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  function generate(curr: number, count: number, combination: number[]) {
    if (count === k) return result.push(combination);
    if (curr > n) return;
    generate(curr + 1, count + 1, [...combination, curr]);
    generate(curr + 1, count, [...combination]);
  }
  generate(1, 0, []);
  return result;
};