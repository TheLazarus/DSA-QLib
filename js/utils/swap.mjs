function swap(i1, i2, arr) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

export default swap;
