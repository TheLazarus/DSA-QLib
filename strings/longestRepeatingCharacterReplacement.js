function longestRepeatingCharacterReplacement(str, k) {
  let l = str.length;
  let iCode = "A".charCodeAt(0);
  let maxLen = 0;

  for (let i = 0; i < l; i++) {
    let maxFreq = 0;
    let freq = new Array(26).fill(0);
    for (let j = i; j < l; j++) {
      let code = str.charCodeAt(j);
      freq[code - iCode]++;
      maxFreq = Math.max(maxFreq, freq[code - iCode]);

      const currLength = j - i + 1;

      if (currLength - maxFreq <= k) {
        maxLen = Math.max(maxLen, currLength);
      } else break;
    }
  }

  return maxLen;
}


console.log(longestRepeatingCharacterReplacement("ABBB", 1))
