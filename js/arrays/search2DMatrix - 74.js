var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let row = null;

  for (let i = 0; i < m; i++) {
    if (target <= matrix[i][n - 1]) {
      row = i;
      break;
    }
  }

  if(!row) return false;

  return binarySearch(0, n, matrix[row], target);

  function binarySearch(low, high, arr, target) {
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      console.log(mid);

      if (arr[mid] === target) return true;

      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return false;
  }
};

console.log(
  searchMatrix(
    [[1]],
    30
  )
);
