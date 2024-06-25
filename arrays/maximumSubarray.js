var maxSubArray = function (nums) {
  let maxSum = Math.max();
  let sum = 0;

  for (let num of nums) {
    sum += num;

    maxSum = Math.max(maxSum, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};
