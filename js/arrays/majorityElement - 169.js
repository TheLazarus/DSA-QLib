var majorityElement = function (nums) {
  let mpp = {};

  let length = nums.length;

  for (let num of nums) {
    mpp[num] = mpp[num] !== undefined ? mpp[num] + 1 : 0;
    if (mpp[num] >= Math.floor(length / 2)) {
      return num;
    }
  }
};
