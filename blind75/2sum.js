function TwoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (map[compliment]) {
      return [i, map[compliment]];
    } else {
      map[arr[i]] = i;
    }
  }
}
