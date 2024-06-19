function pascalsTriangle(numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let currentRow = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        currentRow.push(ans[i - 1][j - 1] + ans[i - 1][j]);
      }
    }
    ans.push(currentRow);
  }
  return ans;
}

console.log(pascalsTriangle(5));
