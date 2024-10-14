var maxConsecutiveAnswers = function (answerKey, k) {
  let i = 0;
  let j = 0;

  let tempK = k;

  let maxFalse = Math.max();
  let maxTrue = Math.max();

  while (j < answerKey.length) {
    if (answerKey[j] === "T") {
      maxTrue = Math.max(maxTrue, j - i + 1);
      j++;
    } else {
      while (tempK === 0) {
        if (answerKey[i] === "F") {
          tempK++;
        }
        i++;
      }
      tempK--;
      maxTrue = Math.max(maxTrue, j - i + 1);
      j++;
    }
  }

  i = 0;
  j = 0;
  tempK = k;

  while (j < answerKey.length) {
    if (answerKey[j] === "F") {
      maxFalse = Math.max(maxFalse, j - i + 1);
      j++;
    } else {
      while (k === 0) {
        if (answerKey[i] === "T") {
          k++;
        }
        i++;
      }
      k--;
      maxFalse = Math.max(maxFalse, j - i + 1);
      j++;
    }
  }

  return Math.max(maxTrue, maxFalse);
};

console.log(maxConsecutiveAnswers("TTFF", 2));
