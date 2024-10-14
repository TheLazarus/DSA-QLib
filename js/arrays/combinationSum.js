var combinationSum = function (candidates, target) {
  let ans = [];
  let l = candidates.length;

  solve(ans, [], 0);

  function solve(ans, combination, sum) {
    if (sum > target) return;

    if (sum === target) {
      ans.push([...combination]);
      return;
    }

    for (let i = 0; i < l; i++) {
      combination.push(candidates[i]);
      solve(ans, combination, sum + candidates[i]);
      combination.pop();
    }
  }

  for (let a of ans) {
    a.sort((a, b) => a - b);
  }

  let set = new Set();
  let newArray = [];

  for (let a of ans) {
    const el = a.join("");
    if (!set.has(el)) {
      newArray.push(a);
      set.add(el);
    }
  }
  return newArray;
};

console.log(combinationSum([2, 3, 6, 7], 7));
