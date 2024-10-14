function subsetSums(arr, n) {
  let sums = [];

  solve(0, arr, 0, sums);

  sums.sort((a, b) => a - b);

  console.log(sums.join(" "));

  function solve(i, arr, sum, sums) {
    if (i >= arr.length) {
      sums.push(sum);
      return;
    }
    solve(i + 1, arr, sum + arr[i], sums);
    solve(i + 1, arr, sum, sums);
  }
}

subsetSums([2, 3], 2);
