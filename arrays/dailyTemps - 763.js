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

var dailyTemperaturesOptimized = function (temperatures) {
  let ans = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const topIndex = stack[stack.length - 1];
      stack.pop();
      ans[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return ans;
};
