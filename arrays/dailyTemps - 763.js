var dailyTemperatures = function (temperatures) {
  let ans = [];
  let l = temperatures.length;
  let i = 0;

  while (i < l) {
    let j = i + 1;
    while (j < l && temperatures[j] <= temperatures[i]) {
      j++;
    }
    if (j === l) {
      ans[i] = 0;
    } else {
      ans[i] = j - i;
    }
    i++;
  }

  return ans;
};

console.log(dailyTemperatures([30,60,90]));
