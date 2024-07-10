var slowestKey = function (releaseTimes, keysPressed) {
  let max = releaseTimes[0];
  let ans = keysPressed[0];

  let i = 0;
  let j = i + 1;

  while (j < keysPressed.length) {
    const diff = releaseTimes[j] - releaseTimes[i];
    if (diff > max) {
      max = diff;
      ans = keysPressed[j];
    } else if (diff === max && keysPressed[j] > ans) {
      ans = keysPressed[j];
    }
    i++;
    j++;
  }
  return ans;
};

console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
