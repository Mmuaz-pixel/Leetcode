function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let c of s) {
      console.log(rows)
      rows[currentRow] += c;
      if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
      currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}


console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"