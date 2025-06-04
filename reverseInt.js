/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = 0;
  let negative = false; 

  if(x<0)
  {
    negative = true;
    x= Math.abs(x);
  }

  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);

    if (reversed > (2 ** 32 - 1) ) {
      return 0;
    }

    console.log(reversed, x);
  }

  return negative? -reversed: reversed;
};

console.log(reverse(-2147483412))