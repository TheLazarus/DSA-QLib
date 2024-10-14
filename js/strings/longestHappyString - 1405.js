var longestDiverseString = function (a, b, c) {
  let map = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];

  let ans = "";

  while (map[0][1] || map[1][1] || map[2][1]) {
    map.sort((a, b) => b[1] - a[1]);
    let charToAdd = null;

    for (let i = 0; i < map.length; i++) {
      let [char, value] = map[i];

      if (value <= 0) continue;

      if (ans[ans.length - 1] === char && ans[ans.length - 2] === char)
        continue;

      charToAdd = i;
      break;
    }

    if (charToAdd === null) break;

    ans = `${ans}${map[charToAdd][0]}`;
    map[charToAdd][1]--;
  }

  return ans;
};

console.log(longestDiverseString(1, 1, 7));
