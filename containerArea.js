var maxArea = function(height) {
  let max = 0; 
  let total = height.length; 

  let i= 0;
  let j = total - 1;

  while(j > i){
    let h = Math.min(height[i], height[j]);
    let w = j - i;
    let area = h * w;

    if(area > max){
      max = area;
    }

    if(height[i] < height[j]){
      i++;
    } else {
      j--;
    }
  }
  
  return max; 
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49