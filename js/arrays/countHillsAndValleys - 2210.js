var countHillValley = function (nums) {
  let ans = 0;
  let l = nums.length;
  let pSum = new Set();

  for (let i = 0; i < l; i++) {
    let j = i - 1;
    let k = i + 1;

    while (j >= 0) {
      if (nums[j] === nums[i]) {
        j--;
        continue;
      }
      break;
    }

    if (j < 0) continue;

    while (k < l) {
      if (nums[k] === nums[i]) {
        k++;
        continue;
      }
      break;
    }

    if (k >= l) continue;

    if (
      ((nums[j] < nums[i] && nums[k] < nums[i]) ||
        (nums[j] > nums[i] && nums[k] > nums[i])) &&
      !pSum.has(`${j}.${k}`)
    ) {
      ans++;
      pSum.add(`${j}.${k}`);
    }
  }

  return ans;
};
