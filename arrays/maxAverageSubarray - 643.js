var findMaxAverage = function (nums, k) {
  let maxAvg = Math.max();
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxAvg = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];

    maxAvg = Math.max(maxAvg, sum / k);
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
