// TC - O(nlogn + n)

function secondLargestElementInArray(arr) {
  arr.sort((a, b) => a - b); // Takes O(nlogn)

  const largestElement = arr.at(-1);

  // Need to run a loop from the end until we find an element which is not equal to the largest element;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== largestElement) {
      return arr[i];
    }
  }
}

// TC - O(n+n) => comes out be O(n)
function secondLargestElementInArrayOptimized(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    largest = Math.max(largest, arr[i]);
  }

  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(
  secondLargestElementInArray([90, 100, 100, 100, 23, 23, 23, 78, 88, 34, 11])
);

console.log(
  secondLargestElementInArrayOptimized([
    90, 100, 100, 100, 23, 23, 23, 78, 88, 34, 11,
  ])
);
