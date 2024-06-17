var largestLocal = function (grid) {
  let l = grid.length;
  let requiredGridDim = l - 2;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];
  const maxGrid = new Array(requiredGridDim)
    .fill(-1)
    .map(() => new Array(requiredGridDim));

  for (let i = 0; i < requiredGridDim; i++) {
    for (let j = 0; j < requiredGridDim; j++) {
      let xCenter = i + 1;
      let yCenter = j + 1;

      let max = 0;

      for (let dir of directions) {
        const [delx, dely] = dir;

        const newX = xCenter + delx;
        const newY = yCenter + dely;

        const val = grid[newX][newY] ?? 0;

        max = Math.max(max, val);
      }
      maxGrid[i][j] = Math.max(max, grid[xCenter][yCenter]);
    }
  }

  return maxGrid;
};

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
