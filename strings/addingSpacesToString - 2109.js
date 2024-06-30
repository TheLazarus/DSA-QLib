var addSpaces = function (s, spaces) {
  let arr = s.split("");
  let count = 0;

  for (let sp of spaces) {
    arr.splice(sp + count, 0, " ");
    count++;
  }

  return arr.join("");
};

// Above solution give TLE on leetcode - O(n^2);

var addSpacesOptimal = function (s, spaces) {
  let spacesSet = new Set(spaces);
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    if (spacesSet.has(i)) {
      ans.push(" ");
    }
    ans.push(s[i]);
  }

  return ans.join("");
};

// Takes O(n) space and time complexity

