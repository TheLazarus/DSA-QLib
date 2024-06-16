var maxIncreaseKeepingSkyline = function (grid) {
  // Need to find row and column maximums
  let n = grid.length;
  let rowColMax = new Array(n).fill(-1).map(() => new Array(2).fill(-Infinity));

  for (let i = 0; i < n; i++) {
    let rowMax = -Infinity;
    let colMax = -Infinity;
    for (let j = 0; j < n; j++) {
      rowMax = Math.max(rowMax, grid[i][j]);
      colMax = Math.max(colMax, grid[j][i]);
    }
    rowColMax[i][0] = rowMax;
    rowColMax[i][1] = colMax;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let diff = Math.min(rowColMax[i][0], rowColMax[j][1]) - grid[i][j];
      if (diff > 0) {
        sum += diff;
      }
    }
  }

  return sum;
};

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ])
);
