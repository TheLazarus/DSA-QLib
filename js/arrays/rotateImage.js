function rotateImage(matrix) {
  let n = matrix.length;

  let l = 0;
  let r = n - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let temp = matrix[l + i][l];

      matrix[l + i][l] = matrix[r][l + i];

      matrix[r][l + i] = matrix[r - i][r];

      matrix[r - i][r] = matrix[l][r - i];

      matrix[l][r - i] = temp;
    }
    l++;
    r--;
  }

  return matrix;
}

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
