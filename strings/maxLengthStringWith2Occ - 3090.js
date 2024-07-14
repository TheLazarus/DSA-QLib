var maximumLengthSubstring = function (s) {
  let max = 0;
  let occurences = {};

  let i = 0;
  let j = 0;

  while (j < s.length) {
    while (occurences[s[j]] === 2) {
      occurences[s[i]] -= 1;
      i++;
    }

    occurences[s[j]] =
      occurences[s[j]] !== undefined ? occurences[s[j]] + 1 : 1;
    max = Math.max(j - i + 1, max);
    j++;
  }

  return max;
};

console.log(maximumLengthSubstring("bcbbbcba"));
