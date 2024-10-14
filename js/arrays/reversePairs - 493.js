var reversePairs = function (nums) {
  const length = nums.length;
  let ans = 0;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] > 2 * nums[j]) {
        ans++;
      }
    }
  }

  return ans;
};

var reversePairsOptimal = function (nums) {
  let count = 0;
  function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }

    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }
  function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    countPairs(arr, low, mid, high);
    merge(arr, low, mid, high);
  }

  function countPairs(arr, low, mid, high) {
    let right = mid + 1;
    for (let i = low; i <= mid; i++) {
      while (right <= high && arr[i] > 2 * arr[right]) {
        right++;
      }
      count += right - (mid + 1);
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return count;
};


console.log(reversePairsOptimal([2,4,3,5,1]))