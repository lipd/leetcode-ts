// 迭代法

function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  const bound = Math.floor(nums.length / 2);
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const count = map.get(curr);
    if (count !== undefined) {
      if ((count + 1) > bound) return curr;
      map.set(curr, count + 1);
    } else {
      map.set(curr, 1);
    }
  }
  throw Error('illegal argument')
};