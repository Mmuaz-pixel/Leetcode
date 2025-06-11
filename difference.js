var maxDifference = function(s) {
  let maxOdd = 0; 
  let maxEven = 0; 
  const count = {}; 

  // Count frequencies first
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Analyze frequencies after counting
  for (let char in count) {
    const freq = count[char];

    if (freq % 2 === 0) {
      maxEven = Math.max(maxEven, freq);
    } else {
      maxOdd = Math.max(maxOdd, freq);
    }
  }

  return maxOdd - maxEven;
};

console.log(maxDifference("mmsmsym")); 