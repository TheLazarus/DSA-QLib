var permute = function (nums) {
  const l = nums.length;

  const ans = [];
  const ds = [];

  backtrack(0, ds, ans);

  return ans;

  function backtrack(i, ds, ans) {
    if (i === l) {
      ans.push([...ds]);
      return;
    }

    for (let j = 0; j < l; j++) {
      if (ds.includes(nums[j])) continue;

      ds.push(nums[j]);
      backtrack(i + 1, ds, ans);
      ds.pop();
    }
  }
};


console.log(permute([0, 1]))