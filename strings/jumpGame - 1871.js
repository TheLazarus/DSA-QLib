var canReach = function (s, minJump, maxJump) {
  return solve(0);

  function solve(i) {
    if (i >= s.length) return false;

    if (i === s.length - 1) return true;

    for (let j = i + 1; j < s.length; j++) {
      if (
        i + minJump <= j &&
        j <= Math.min(i + maxJump, s.length - 1) &&
        s[j] === "0"
      ) {
        if (solve(j)) {
          return true;
        }
      }
    }

    return false;
  }
};

console.log(canReach("011010", 2, 3));
