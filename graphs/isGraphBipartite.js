function isGraphBipartite(graph) {
  const nodes = graph.length;

  for (let i = 0; i < graph.length; i++) {
    const startingNode = i;
    let visited = new Array(nodes).fill(-1);

    const queue = [startingNode];
    visited[startingNode] = 0;

    while (queue.length) {
      let node = queue.shift();

      for (let nhb of graph[node]) {
        if (visited[nhb] === -1) {
          visited[nhb] = !visited[node];
          queue.push(nhb);
        } else if (visited[nhb] === visited[node]) {
          return false;
        }
      }
    }
  }

  return true;
}

console.log(
  isGraphBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
