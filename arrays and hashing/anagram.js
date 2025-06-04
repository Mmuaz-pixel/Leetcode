var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const countS = Array(26).fill(0);
  const countT = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
      countS[s.charCodeAt(i) - 97]++;
      countT[t.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
      if (countS[i] !== countT[i]) return false;
  }

  return true;
};