var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      max = Math.max(max, counter);
    } else {
      counter = 0;
    }
  }
  return max;
};
