var decrypt = function (code, k) {
  const ans = [...code];
  const l = code.length;
  if (k === 0) {
    for (let i = 0; i < l; i++) {
      ans[i] = 0;
    }
  } else if (k > 0) {
    for (let i = 0; i < l; i++) {
      let sum = 0;

      for (let j = i + 1; j < i + k + 1; j++) {
        sum += code[j % l];
        console.log(sum);
      }

      ans[i] = sum;
    }
  } else {
    for (let i = 0; i < l; i++) {
      let sum = 0;

      for (let j = i - 1; j >= i - Math.abs(k); j--) {
        if (j < 0) {
          sum += code[l + j];
        } else {
          sum += code[j];
        }
      }

      ans[i] = sum;
    }
  }

  return ans;
};

console.log(decrypt([2, 4, 9, 3], -2));
