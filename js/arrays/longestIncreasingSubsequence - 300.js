var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length)
    .fill(-1)
    .map(() => new Array(nums.length + 1).fill(-1));
  return solve(0, -1);

  function solve(i, prev) {
    if (i === nums.length) return 0;

    if (dp[i][prev + 1] !== -1) return dp[i][prev + 1];

    let len = solve(i + 1, prev);

    if (prev === -1 || nums[i] > nums[prev]) {
      len = Math.max(1 + solve(i + 1, i), len);
    }
    dp[i][prev + 1] = len;
    return len;
  }
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
