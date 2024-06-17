var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let op of operations) {
    switch (op) {
      case "++X":
      case "X++":
        x += 1;
        break;
      case "--X":
      case "X--":
        x--;
    }
  }

  return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
