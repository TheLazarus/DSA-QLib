function isGraphBipartite(graph) {
  const nodes = graph.length;
  let visited = new Array(nodes).fill(-1);
  const queue = [startingNode];

  for (let i = 0; i < graph.length; i++) {
    if (visited[i] === -1) {
      if (check(i, queue, visited, graph) === false) {
        return false;
      }
    }
  }

  return true;
}

function check(i, queue, visited, graph) {
  const startingNode = i;

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

console.log(
  isGraphBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
