var topKFrequent = function(nums, k) {
  let len = nums.length; 
  if (k > len) {
      return nums;
  }

  let map = new Map(); 

  for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1); 
  }

  console.log(map); 
  console.log(map.entries()); 

  let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map(entry => entry[0]);
};


console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]