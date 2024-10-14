import swap from "../utils/swap.mjs";

function waveArray(arr) {
  arr.sort((a, b) => a - b);

  let n = arr.length;
  let i = 0;
  while (i < n - 1) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;

    i += 2;
  }

  return arr;
}

function waveArrayOptimized(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      swap(i - 1, i, arr);
    }

    if (i < n - 1 && arr[i] < arr[i + 1]) {
      swap(i, i + 1, arr);
    }
  }
  return arr;
}

console.log(waveArray([10, 5, 6, 3, 2, 20, 100, 80]));
console.log(waveArrayOptimized([10, 90, 49, 2, 1, 5, 23]));
