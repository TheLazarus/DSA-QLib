function perfectSquares(n) {
  let dp = new Array(10001).fill(-1);
  return findMin(n, dp);
}

function findMin(n, dp) {
  if (n <= 0) return 0;

  if (dp[n] !== -1) return dp[n];

  let min = Infinity;

  for (let i = 1; i * i <= n; i++) {
    let num = i * i;

    min = Math.min(min, 1 + findMin(n - num, dp));
  }
  dp[n] = min;
  return dp[n];
}

console.log(perfectSquares(12));
