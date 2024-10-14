function longestSubstring(str) {
  // abcabcbb

  let l = str.length;

  if (l <= 1) return l;

  let i = 0;
  let j = 0;
  let max = -Infinity;
  let occurences = new Set();

  while (j < l && i <= j) {
    while (occurences.has(str[j])) {
      occurences.delete(str[i]);
      i++;
    }

    occurences.add(str[j]);
    max = Math.max(max, j - i + 1);
    j++;
  }

  return max;
}

console.log(longestSubstring("1"));
