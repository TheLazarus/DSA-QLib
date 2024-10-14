// TC - O(nlogn)
function largestElementInArray(arr) {
  arr.sort((a, b) => a - b);

  return arr.at(-1);
}

// TC - O(n)
function largestElementInArrayOptimizedOne(arr) {
  let max = -Infinity;

  for (let num of arr) {
    max = Math.max(max, num);
  }

  return max;
}

console.log(largestElementInArray([90, 100, 0, -2, -100, 230, 999]));
console.log(
  largestElementInArrayOptimizedOne([90, 100, 0, -2, -100, 230, 999])
);
