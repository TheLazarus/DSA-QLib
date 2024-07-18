var numTilePossibilities = function (tiles) {
  const count = {};

  for (let tile of tiles) {
    count[tile] = count[tile] ? count[tile] + 1 : 1;
  }
  const choices = [...new Set(tiles.split(""))];

  let ans = 0;

  backtrack();

  return --ans;

  function backtrack() {
    ans++;

    for (let j = 0; j < choices.length; j++) {
      if (count[choices[j]] === 0) continue;

      count[choices[j]]--;
      backtrack();
      count[choices[j]]++;
    }
  }
};

console.log(numTilePossibilities("AAABBC"));
