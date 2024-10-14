var kClosest = function (points, k) {
  let distances = new Array();
  let ans = [];

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    distances.push([dist, i]);
  }

  distances.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (k--) {
    const index = distances[i++][1];
    ans.push(points[index]);
  }

  return ans;
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
