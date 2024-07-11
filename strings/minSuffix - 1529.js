var minFlips = function (target) {
  let count = 0;
  let prev = "0";

  for (let c of target) {
    if (c !== prev) {
      count++;
      prev = c;
    }
  }

  return count;
};

console.log(minFlips("10111"));
