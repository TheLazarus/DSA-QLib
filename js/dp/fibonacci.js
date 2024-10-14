function fibonacci(n) {
  let dp = new Array(n+1).fill(-1);

  return recurse(n, dp);
}

function recurse(n, dp) {
  if (n <= 1) return n;

  if (dp[n] !== -1) return dp[n];

  dp[n] = recurse(n - 1, dp) + recurse(n - 2, dp);

  return dp[n];
}

console.log(fibonacci(6));
