var smallestNumber = function (pattern) {
  let patternLength = pattern.length;

  let ans = [];

  backtrack(-1, ans);

  return ans.join("").toString();

  function backtrack(i, ans) {
    if (i === patternLength) {
      return true;
    }

    for (let j = 1; j <= 9; j++) {
      if (
        i === -1 ||
        (pattern[i] === "I" && j > ans.at(-1) && !ans.includes(j)) ||
        (pattern[i] === "D" && j < ans.at(-1) && !ans.includes(j))
      ) {
        ans.push(j);
        if (backtrack(i + 1, ans) === true) {
          return true;
        }

        ans.pop();
      }
    }
  }
};

console.log(smallestNumber("II"));
