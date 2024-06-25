var sortColors = function (nums) {
  let mpp = new Map([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  for (let i = 0; i < nums.length; i++) {
    mpp.set(nums[i], mpp.get(nums[i]) + 1);
  }

  console.log(mpp);

  for (let i = 0; i < nums.length; i++) {
    if (mpp.get(0) > 0) {
      mpp.set(0, mpp.get(0) - 1);
      nums[i] = 0;
    } else if (mpp.get(1) > 0) {
      mpp.set(1, mpp.get(1) - 1);
      nums[i] = 1;
    } else if (mpp.get(2) > 0) {
      mpp.set(2, mpp.get(2) - 1);
      nums[i] = 2;
    } else break;
  }

  return nums;
};

console.log(sortColors([0, 1, 1, 1, 1, 2, 2, 0]));
