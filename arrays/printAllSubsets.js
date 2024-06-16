function printAllSubsets(nums) {
  let ans = [];
  let ds = [];

  solve(0, ds, ans, nums);

  function solve(i, ds, ans, nums) {
    if (i >= nums.length) {
      ans.push([...ds]); // I was stuck here for so long, make sure to copy the ds array, otherwise when we call ds.pop it changes the answer array as well.
      return;
    }

    ds.push(nums[i]);

    solve(i + 1, ds, ans, nums);
    ds.pop();
    solve(i + 1, ds, ans, nums);
  }

  return ans;
}

console.log(printAllSubsets([1, 2, 3]));
