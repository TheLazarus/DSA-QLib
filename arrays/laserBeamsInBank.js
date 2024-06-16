var numberOfBeams = function (bank) {
  let m = bank.length;

  if (m === 1) return 0;

  let devices = new Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    let rowMap = bank[i];
    for (let p of rowMap) {
      if (p === "1") {
        devices[i]++;
      }
    }
  }

  let sum = 0;

  let i = 0;
  let j = i + 1;

  while (j < m) {
    if (devices[j] !== 0) {
      sum += devices[i] * devices[j];

      i = j;
    }
    j++;
  }

  return sum;
};
