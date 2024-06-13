function houseRobber(nums) {
  const l = nums.length;
  const dp = new Array(101).fill(-1);

  if (l === 1) return nums[0];

  return recurse(nums, l, dp);
}

function recurse(nums, l, dp) {
  if (l === 1) {
    return nums[0];
  }
  if (l === 0) return 0;

  if (dp[l] !== -1) return dp[l];

  dp[l] = Math.max(
    nums[l - 1] + recurse(nums, l - 2, dp),
    recurse(nums, l - 1, dp)
  );

  return dp[l];
}

console.log(houseRobber([2, 7, 9, 3, 1]));
