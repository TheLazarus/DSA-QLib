var merge = function (intervals) {
  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);

  ans = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastStart = ans.at(-1)[0];
    const lastEnd = ans.at(-1)[1];

    if (start <= lastEnd) {
      ans[ans.length - 1] = [lastStart, Math.max(lastEnd, end)];
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
