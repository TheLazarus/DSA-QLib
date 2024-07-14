var countGoodSubstrings = function (s) {
  let count = 0;
  let i = 0;
  let j = 0;

  let occurences = new Set();

  while (j < s.length) {
    while (occurences.has(s[j])) {
      occurences.delete(s[i]);
      i++;
    }

    occurences.add(s[j]);
    if (j - i + 1 === 3) {
      count += 1;
      occurences.delete(s[i]);
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

console.log(countGoodSubstrings("owuxoelszb"));
