// 回溯法：生成

function permuteUnique(nums: number[]): number[][] {
  const counter: {[p: string]: number} = {};
  nums.forEach(each => counter[each] = counter[each] ? counter[each] + 1 : 1);
  const elements = Object.keys(counter).map(s => Number(s));

  const ans: number[][] = [];
  function generate(curr: number[]) {
    const currNum = curr[curr.length - 1];
    if(curr.length === nums.length) return ans.push(curr.slice());

    elements.map(element => {
      if(counter[element] === 0) return;
      curr.push(element);
      counter[element] -= 1;
      generate(curr);
      curr.pop();
      counter[element] += 1;
    });
  }
  generate([]);
  return ans;
};