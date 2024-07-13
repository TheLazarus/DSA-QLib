var maxScoreWords = function (words, letters, score) {
  let map = {};

  for (let letter of letters) {
    map[letter] = map[letter] === undefined ? 1 : map[letter] + 1;
  }

  return backtrack(0);

  function backtrack(i) {
    if (i === words.length) return 0;

    let res = backtrack(i + 1);

    if (isValidWord(words[i], map)) {
      for (let alp of words[i]) {
        map[alp] -= 1;
      }
      res = Math.max(res, getScore(words[i], score) + backtrack(i + 1));
      for (let alp of words[i]) {
        map[alp] += 1;
      }
    }

    return res;
  }
};

function getScore(word, scores) {
  let score = 0;
  for (let alp of word) {
    let index = alp.charCodeAt(0) - "a".charCodeAt(0);
    score += scores[index];
  }
  return score;
}

function isValidWord(word, map) {
  let wc = {};
  for (let alp of word) {
    wc[alp] = wc[alp] === undefined ? 1 : wc[alp] + 1;
  }

  for (let alp of Object.keys(wc)) {
    if (!Object.hasOwn(map, alp) || wc[alp] > map[alp]) {
      return false;
    }
  }
  return true;
}

console.log(
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [
      1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
