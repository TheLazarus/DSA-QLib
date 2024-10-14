var countArrangement = function (n) {
  let ans = 0;
  let ds = [];

  backtrack(1, ds);

  return ans;

  function backtrack(i, ds) {
    if (i === n + 1) {
      let isValid = true;
      for (let j = 0; j < ds.length; j++) {
        if (ds[j] % (j + 1) !== 0 && (j + 1) % ds[j] !== 0) {
          isValid = false;
        }
      }
      if (isValid) {
        ans++;
      }
      return;
    }

    for (let j = 1; j <= n; j++) {
      if (ds.includes(j)) continue;

      ds.push(j);
      backtrack(i + 1, ds, ans);
      ds.pop();
    }
  }
};

console.log(countArrangement(1));
