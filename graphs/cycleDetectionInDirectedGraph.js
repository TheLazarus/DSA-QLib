function detectCycleInDirectedGraphDFS(graph) {
  let nodes = graph.length;

  const visited = new Array(nodes).fill(-1);
  const pathVisited = new Array(nodes).fill(-1);

  for (let i = 0; i < nodes; i++) {
    if (visited[i] === -1) {
      if (dfs(i, graph, visited, pathVisited)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(i, graph, visited, pathVisited) {
  visited[i] = true;
  pathVisited[i] = true;

  for (let nhb of graph[i]) {
    if (!visited[nhb]) {
      if (dfs(nhb, graph, visited, pathVisited)) {
        return true;
      }
    } else if (pathVisited[nhb]) {
      return true;
    }
  }
  pathVisited[i] = false;
  return false;
}

console.log(
  detectCycleInDirectedGraphDFS([
    [6, 5],
    [5, 3],
    [3, 1],
    [1, 2],
    [2, 4],
    [4, 0],
  ])
);
