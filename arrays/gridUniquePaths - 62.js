var uniquePaths = function (m, n) {
  return findPaths(0, 0);

  function findPaths(i, j) {
    if (i === m - 1 && j === n - 1) return 1;

    if (i >= m || j >= n) return 0;

    return findPaths(i + 1, j) + findPaths(i, j + 1);
  }
};
