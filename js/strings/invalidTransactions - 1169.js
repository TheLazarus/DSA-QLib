var invalidTransactions = function (transactions) {
  let transactionMap = {};

  for (let transaction of transactions) {
    transactionMap[transaction] = transactionMap[transaction]
      ? transactionMap[transaction] + 1
      : 1;
  }

  let ans = [];

  transactions.sort(
    (a, b) => Number(a.split(",")[1]) - Number(b.split(",")[1])
  );

  for (let transaction of transactions) {
    const amount = Number(transaction.split(",")[2]);
    if (amount > 1000) {
      ans.push(transaction);
      transactionMap[transaction]--;
    }
  }

  for (let i = 0; i < transactions.length; i++) {
    for (let j = i + 1; j < transactions.length; j++) {
      const name1 = transactions[i].split(",")[0];
      const name2 = transactions[j].split(",")[0];

      const time1 = Number(transactions[i].split(",")[1]);
      const time2 = Number(transactions[j].split(",")[1]);

      const city1 = transactions[i].split(",")[3];
      const city2 = transactions[j].split(",")[3];

      if (time2 - time1 <= 60 && city1 !== city2 && name1 === name2) {
        if (transactionMap[transactions[i]]) {
          ans.push(transactions[i]);
          transactionMap[transactions[i]]--;
        }
        if (transactionMap[transactions[j]]) {
          ans.push(transactions[j]);
          transactionMap[transactions[j]]--;
        }
      } else if (time2 - time1 > 60) break;
    }
  }
  return ans;
};

console.log(
  invalidTransactions([
    "bob,689,1910,barcelona",
    "alex,696,122,bangkok",
    "bob,832,1726,barcelona",
    "bob,820,596,bangkok",
    "chalicefy,217,669,barcelona",
    "bob,175,221,amsterdam",
  ])
);
