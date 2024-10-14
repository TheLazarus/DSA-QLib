var maxAreaOfIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let visited = new Array(m).fill(-1).map(() => new Array(n).fill(false));
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let island = [];
      if (!visited[i][j] && grid[i][j] === 1) {
        dfs(i, j, visited, grid, island);
      }
      ans = Math.max(ans, island.length);
    }
  }

  function dfs(i, j, visited, grid, island) {
    visited[i][j] = true;
    island.push([i, j]);

    for (let dir of directions) {
      const [delx, dely] = dir;

      const newX = i + delx;
      const newY = j + dely;

      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        !visited[newX][newY] &&
        grid[newX][newY] === 1
      ) {
        dfs(newX, newY, visited, grid, island);
      }
    }
  }

  return ans;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
