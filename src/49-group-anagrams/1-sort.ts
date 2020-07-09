// 排序法

function groupAnagrams(strs: string[]): string[][] {
  const hash: any = {};
  const res: string[][] = [];
  for (let str of strs) {
    const strSorted = str.split("").sort().join("");
    if (hash[strSorted]) {
      hash[strSorted].push(str);
    } else {
      hash[strSorted] = [str];
    }
  }

  for (let key in hash) {
    res.push(hash[key]);
  }

  return res;
}
