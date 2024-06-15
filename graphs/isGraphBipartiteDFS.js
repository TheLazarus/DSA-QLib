function isGraphBipartite(graph) {
  const nodes = graph.length;
  const colors = new Array(nodes).fill(-1);

  for (let i = 0; i < nodes; i++) {
    let currentNode = i;

    if (colors[currentNode] === -1) {
      if (!dfs(currentNode, graph, colors, 0)) {
        return false;
      }
    }
  }
  return true;
}

function dfs(currentNode, graph, colors, color) {
  colors[currentNode] = color;

  for (const nhb of graph[currentNode]) {
    if (colors[nhb] === -1) {
      if (!dfs(nhb, graph, colors, color === 0 ? 1 : 0)) {
        return false;
      }
    } else if (colors[nhb] === color) {
      return false;
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
