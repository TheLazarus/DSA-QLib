function moveZeroes(arr) {
  const l = arr.length;
  let firstZero = arr.findIndex((num) => num === 0);
  let i = firstZero;
  let j = firstZero + 1;

  while (j < l) {
    if (arr[j] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return arr;
}

const arr = [1, 2, 3, 0, 0, 0, 4, 5, 8, 0, 0, 10];
console.log(moveZeroes(arr));
