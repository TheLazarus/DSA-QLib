var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n === 1) return x;

  if (n === -1) return 1 / x;

  let absN = Math.abs(n);

  let i = 1;
  let ans = 1;

  while (i <= absN) {
    ans = ans * x;
    i++;
  }

  return n > 0 ? ans : 1 / ans;
};

