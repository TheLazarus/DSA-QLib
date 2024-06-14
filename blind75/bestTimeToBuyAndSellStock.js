function bestTime(prices) {
  let maxProfit = 0;
  let curr = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curr) {
      curr = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - curr);
    }
  }

  return maxProfit;
}

console.log(bestTime([7,1,5,3,6,4]))
