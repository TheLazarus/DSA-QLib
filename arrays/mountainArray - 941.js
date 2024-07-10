var validMountainArray = function (arr) {
  const l = arr.length;

  if (l < 3) {
    return false;
  }

  let [as, ds] = [false, false];
  let i = 0;
  let j = i + 1;

  while (j < l) {
    if (arr[i] < arr[j]) {
      if (ds) return false;

      as = !as ? !as : as;

      i++;
      j++;
    } else if (arr[i] > arr[j]) {
      if (!as) return false;

      ds = !ds ? !ds : ds;

      i++;
      j++;
    } else {
      return false;
    }
  }

  return as && ds;
};

console.log(validMountainArray([4, 3, 2, 1]));
