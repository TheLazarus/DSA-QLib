function repeatedDNASequences(s) {
  let l = s.length;
  let freq = {};
  let ans = [];

  for (let i = 0; i < l; i++) {
    let ss = "";
    for (let j = i; j < l; j++) {
      ss = `${ss}${s[j]}`;

      if (ss.length === 10) {
        freq[ss] ? freq[ss]++ : (freq[ss] = 1);
        break;
      }
    }
  }

  for (let [key, value] of Object.entries(freq)) {
    if (value > 1) {
      ans.push(key);
    }
  }

  return ans;
}

repeatedDNASequences("AAAAAAAAAAAAA");
