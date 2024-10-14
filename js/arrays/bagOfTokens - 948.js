var bagOfTokensScore = function (tokens, power) {
  if (!tokens.length) return 0;

  if (tokens.length === 1 && tokens[0] > power) return 0;

  tokens.sort((a, b) => a - b);

  let ans = 0;

  let i = 0;
  let j = tokens.length - 1;

  while (i <= j) {
    if (power >= tokens[i]) {
      ans++;
      power -= tokens[i];
      i++;
    } else if (ans > 0 && i + 1 < j) {
      power += tokens[j];
      ans--;
      j--;
    } else break;
  }

  return ans;
};

console.log(bagOfTokensScore([100], 50));
