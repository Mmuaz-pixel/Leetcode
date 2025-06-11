/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []; 

  for(char in s)
  {
      if(['(', '{', '['].includes(char))
      {
          stack.push(char)
      }
      else if(char === ')')
      {
          if(stack.pop() !== '('){
              return false; 
          }
      }
      else if(char === '}')
      {
          if(stack.pop() !== '{'){
              return false; 
          }
      }
      else if(char === ']')
      {
          console.log(stack);
          if(stack.pop() !== '['){
              return false; 
          }
      }
  }

  return true; 
};


// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false