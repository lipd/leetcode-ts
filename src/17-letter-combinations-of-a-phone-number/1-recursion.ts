// 递归法

const map: {[p: string]: string} = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];
  const res: string[] = [];
  function generate(curr: string) {
    if(curr.length === digits.length) return res.push(curr);
    const currNum = digits[curr.length];
    map[currNum].split('').map(each => generate(curr + each));
  };
  generate('');
  return res;
};