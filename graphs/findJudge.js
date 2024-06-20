var findJudge = function (n, trust) {
  if (n === 1) return 1;

  const adjList = new Array(n + 1).fill(-1).map(() => new Array());
  const indegrees = new Array(n + 1).fill(0);

  for (let node of trust) {
    const [source, dest] = node;
    adjList[source].push(dest);
  }

  for (let node of adjList) {
    for (let conn of node) {
      if (++indegrees[conn] === n - 1 && adjList[conn]?.length === 0) {
        return conn;
      }
    }
  }

  return -1;
};

console.log(
  findJudge(4, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
