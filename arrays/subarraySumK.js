// Runs in O(n^2)

var subarraySum = function (nums, k) {
  let l = nums.length;
  let count = 0;

  for (let i = 0; i < l; i++) {
    let sum = 0;
    for (let j = i; j < l; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

// How to optimize this

var subarraySumOptimized = function (nums, k) {
  let prefixSums = {};
  prefixSums[0] = 1;
  let l = nums.length;
  let sum = 0;
  let ans = 0;

  for (let i = 0; i < l; i++) {
    sum += nums[i];

    let prefixSumRequired = sum - k;

    ans += prefixSums[prefixSumRequired] ?? 0;

    prefixSums[sum] = 1 + (prefixSums[sum] ?? 0);
  }

  return ans;
};

console.log(subarraySumOptimized([1, 1, 1], 2));
