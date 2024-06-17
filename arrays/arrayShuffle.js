var shuffle = function (nums, n) {
    if (nums.length <= 2) return nums;

    let ans = [];
  
    for (let i = 0; i < n; i++) {
      ans.push(nums[i], nums[n + i]);
    }
  
    return ans;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
