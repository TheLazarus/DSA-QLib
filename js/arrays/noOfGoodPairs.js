var numIdenticalPairs = function (nums) {
  let map = {};
  let goodPairs = 0;

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      goodPairs += map[num];
      map[num]++;
    }
  }

  return goodPairs;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
