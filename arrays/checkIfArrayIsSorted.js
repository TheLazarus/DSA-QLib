// TC - O(n)

function checkIfArrayIsSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

const arr = [1, 2, 3, 5, 1, 6];

console.log(checkIfArrayIsSorted(arr));
