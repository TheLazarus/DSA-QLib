var majorityElement = function (nums) {
  let threshold = Math.floor(nums.length / 2);
  let max = 0;

  let map = {};

  for (let num of nums) {
    map[num] = (map[num] ?? 0) + 1;
    max = Math.max(max, map[num]);

    if (max > threshold) {
      return num;
    }
  }
};

var majorityElementOp = function (nums) {
  nums.sort((a, b) => a - b);

  let threshold = Math.floor(nums.length / 2);

  let max = 0;
  let count = 0;
  let prev = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === prev) {
      count++;
      max = Math.max(max, count);
      if (max > threshold) {
        return nums[i];
      }
    } else {
      count = 1;
      prev = nums[i];
    }
  }
};

var majorityElementMoore = function (nums) {
 
};

console.log(majorityElementMoore([2, 2, 1, 1, 1, 2, 2]));
