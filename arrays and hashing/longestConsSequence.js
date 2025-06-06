/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  let newset = new Set(nums);

  let current = 1;
  for (let num of newset) {
      current = 1;
      if (!newset.has(num - 1)) {

          while (newset.has(num + current)) {
              current++;
          }
          max = max > current ? max : current;
      }
  }

  return max
};