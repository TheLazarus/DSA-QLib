var subsetsWithDup = function (nums) {
  let ans = [];
  let combination = [];

  nums.sort((a, b) => a - b);

  solve(0, nums, ans, combination);

  return ans;

  function solve(i, nums, ans, combination) {
    ans.push([...combination]);

    for (let j = i; j < nums.length; j++) {
      if (j > i && nums[j] === nums[j - 1]) continue;

      combination.push(nums[j]);
      solve(j + 1, nums, ans, combination);
      combination.pop();
    }
  }
};

console.log(subsetsWithDup([1, 2, 2]));
