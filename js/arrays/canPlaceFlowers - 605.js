var canPlaceFlowers = function (flowerbed, n) {
  let l = flowerbed.length;

  if (l < n) {
    return false;
  }

  const max = Math.ceil(flowerbed.length / 2);

  if (n > max) {
    return false;
  }

  let iMap = new Map();

  for (let i = 0; i < l; i++) {
    if (flowerbed[i] === 1) {
      iMap.set(i, true);
    }
  }

  let emptySpaces = 0;

  for (let i = 0; i < l; i++) {
    if (flowerbed[i] === 1) continue;

    const leftIndex = i === 0 ? i : i - 1;
    const rightIndex = i === l - 1 ? i : i + 1;

    if (!iMap.get(leftIndex) && !iMap.get(rightIndex)) {
      emptySpaces++;
      iMap.set(i, true);
    }
  }

  return n <= emptySpaces;
};
