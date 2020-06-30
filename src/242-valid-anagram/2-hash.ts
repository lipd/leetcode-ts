// 哈希表法
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const s_hash: any = {};
  const t_hash: any = {};

  for (let i = 0; i < s.length; i++) {
    s_hash[s[i]] = s_hash[s[i]] === undefined ? 1 : s_hash[s[i]] + 1;
    t_hash[t[i]] = t_hash[t[i]] === undefined ? 1 : t_hash[t[i]] + 1;
  }

  for (let char in s_hash) {
    if (s_hash[char] !== t_hash[char]) return false;
  }

  return true;
}
