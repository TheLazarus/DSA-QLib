var ladderLength = function (beginWord, endWord, wordList) {
  let startCode = 97;
  let possibleAlphabets = [];

  for (let i = startCode; i < startCode + 26; i++) {
    possibleAlphabets.push(String.fromCharCode(i));
  }

  let wordSet = new Set(wordList);
  let queue = [];
  queue.push([beginWord, 0]);

  while (queue.length) {
    const [word, depth] = queue.shift();
    if (word === endWord) {
      return depth + 1;
    }
    const alphabets = word.split("");

    for (let i = 0; i < alphabets.length; i++) {
      let tempArray = [...alphabets];
      for (let posalp of possibleAlphabets) {
        tempArray[i] = posalp;
        let newWord = tempArray.join("");

        if (wordSet.has(newWord)) {
          wordSet.delete(newWord);
          queue.push([newWord, depth + 1]);
        }
      }
    }
  }

  return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
