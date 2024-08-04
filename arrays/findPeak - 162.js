var findPeakElement = function (nums) {
  let i = 0;
  let j = 2;
  let l = nums.length;

  if (l === 1) return 0;

  if (l === 2) return nums[0] > nums[1] ? 0 : 1;

  while (j < l) {
    let mid = (i + j) / 2;

    if (nums[mid] > nums[i] && nums[mid] > nums[j]) {
      return mid;
    }

    i++;
    j++;
  }

  if (nums[0] > nums[1]) return 0;

  if (nums[l - 1] > nums[l - 2]) return l - 1;
};

console.log(findPeakElement([1, 2]));
