function rottingOranges(grid) {
  let queue = new Array();
  let m = grid.length;
  let n = grid[0].length;

  let visited = new Array(m).fill(-1).map(() => new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  const minTime = bfs(queue, visited, grid, m, n);

  let areAllOrangesRottenNow = true;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        areAllOrangesRottenNow = false;
      }
    }
  }

  return areAllOrangesRottenNow ? minTime : -1;
}

function bfs(queue, visited, grid, m, n) {
  while (queue.length) {
    const node = queue.shift();
    const [i, j, currentTime] = node;
    const neighbouringDirections = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    for (const [x, y] of neighbouringDirections) {
      const newX = i + x;
      const newY = j + y;
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        !visited[newX][newY] &&
        grid[newX][newY] === 1
      ) {
        visited[newX][newY] = true;
        queue.push([newX, newY, currentTime + 1]);
      }
    }

    if (!queue.length) return currentTime;
  }

  return 0;
}

console.log(rottingOranges([[0]]));
