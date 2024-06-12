function leftRotateArrayByDPlaces(arr, d) {
  const l = arr.length;
  let temp = [];

  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  for (let i = d; i < l; i++) {
    arr[i - d] = arr[i];
  }

  for (let i = d; i < l; i++) {
    arr[i] = temp[i - d];
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(leftRotateArrayByDPlaces(arr, 3));
