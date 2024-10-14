var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return findPaths(0, 0);

  function findPaths(i, j) {
    if (i === m - 1 && j === n - 1) return 1;

    if (i >= m || j >= n) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    dp[i][j] = findPaths(i + 1, j) + findPaths(i, j + 1);
    return dp[i][j];
  }
};
console.log(uniquePaths(30, 30));
