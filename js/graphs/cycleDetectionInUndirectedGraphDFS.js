function detectCycle(V, adjList) {
  const visited = new Array(V).fill(false);
  const startingNode = 0;

  return dfs(startingNode, -1, visited, adjList);
}

function dfs(node, parent, visited, adjList) {
  visited[node] = true;

  for (let nhb of adjList[node]) {
    if (!visited[nhb]) {
      if (dfs(nhb, node, visited, adjList)) {
        return true;
      }
    } else if (parent !== nhb) {
      return true;
    }
  }
  return false;
}
