// Unoptimized - O(nlogn + n)

function missingNumber(nums) {
  // Range is [0, nums.length]

  nums.sort((a, b) => a - b);
  let l = nums.length;

  for (let i = 0; i < l; i++) {
    if (i !== nums[i]) return i;
  }

  return arr.at(-1) + 1;
}

// Optimized O(n)

function missingNumberOptimized(nums) {
  const l = nums.length;

  const reqSum = (l * (l + 1)) / 2;
  const actualSum = nums.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  return reqSum - actualSum;
}

const arr = [0, 1, 2, 3, 4, 5];
console.log(missingNumber(arr));
console.log(missingNumberOptimized(arr));
