// TC - O(n);
function removeDuplicates(arr) {
  let t = 0;
  let currentElement = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== currentElement) {
      arr[t] = arr[i];
      currentElement = arr[i];
      t++;
    }
  }
  return arr;
}

const arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(arr));
