function leftRotateByOnePlace(arr) {
  // After
  const l = arr.length;
  const temp = arr[0];

  for (let i = 1; i < l; i++) {
    arr[i - 1] = arr[i];
  }

  arr[l - 1] = temp;
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(leftRotateByOnePlace(arr));
