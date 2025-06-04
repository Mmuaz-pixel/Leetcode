var groupAnagrams = function (strs) {
  let groups = [];
  let reduced = [...strs]; // clone original array

  var isAnagram = function (s, t) {
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

  while (reduced.length > 0) {
    const base = reduced[0];
    const anagrams = [base];

    reduced.splice(0, 1); 

    for (let i = reduced.length - 1; i >= 0; i--) {
      if (isAnagram(base, reduced[i])) {
        anagrams.push(reduced[i]);
        reduced.splice(i, 1); 
      }
    }

    groups.push(anagrams);
  }

  return groups;
};

console.log(groupAnagrams(["", "", ""])); // [["", "", ""]]
