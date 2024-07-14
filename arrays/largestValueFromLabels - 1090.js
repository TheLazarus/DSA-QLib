var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const valuesWithLabels = [];
  for (let i = 0; i < values.length; i++) {
    valuesWithLabels[i] = [values[i], labels[i]];
  }

  valuesWithLabels.sort((a, b) => b[0] - a[0]);

  const occurences = {};
  let sum = 0;
  let items = 0;

  for (let item of valuesWithLabels) {
    const [value, label] = item;

    if (!occurences[label] || occurences[label] < useLimit) {
      sum += value;
      items += 1;
      occurences[label] = occurences[label] ? occurences[label] + 1 : 1;

      if (items === numWanted) break;
    }
  }

  return sum;
};

console.log(largestValsFromLabels([5, 4, 3, 2, 1], [1, 1, 2, 2, 3], 3, 1));
