function isAnagram(s, t) {
  let frequencies = {};

  for (let alph of s) {
    if (!frequencies[alph]) {
      frequencies[alph] = 1;
    } else {
      frequencies[alph] += 1;
    }
  }

  for (let alph of t) {
    if (!frequencies[alph]) return false;

    frequencies[alph] -= 1;
  }

  for (let freq of Object.values(frequencies)) {
    if (freq !== 0) return false;
  }

  return true;
}


console.log(isAnagram("anagram", "nagaram"));
