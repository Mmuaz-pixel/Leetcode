/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let output = [];

  for (t in temperatures) {
      t = parseInt(t);
      let days = 0;
      for (let i = t + 1; i < temperatures.length; i++) {
          if (temperatures[i] > temperatures[t]) {
              output.push(++days);
              break;
          }
          else {
            days ++; 
          }

          if(i === temperatures.length - 1) {
              output.push(0) 
          }
      }
      // If no warmer day found, push 0
      if (days === 0) {
          output.push(0);
      }
  }

  return output
};


// optimizied stack based solution

var dailyTemperatures = function(temperatures) {
  let output = new Array(temperatures.length).fill(0);
  let stack = []; // store indices

  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
          let prevIndex = stack.pop();
          output[prevIndex] = i - prevIndex;
      }
      stack.push(i);
  }

  return output;
};
