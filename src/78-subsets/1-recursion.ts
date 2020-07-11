// 递归法

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  function generate(index: number, item: number[]) {
    if (index === nums.length) return res.push(item);
    generate(index + 1, [...item]);
    generate(index + 1, [...item, nums[index]]);
  }
  generate(0, []);
  return res;
};