function eventualSafeNodes(graph) {
  const nodes = graph.length;
  const visited = new Array(nodes).fill(false);
  const pathVisited = new Array(nodes).fill(false);
  const ans = [];

  for (let i = 0; i < nodes; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited, pathVisited, ans);
    }
  }

  return ans.sort((a, b) => a - b);
}

function dfs(i, graph, visited, pathVisited, ans) {
  visited[i] = true;
  pathVisited[i] = true;

  for (let nhb of graph[i]) {
    if (!visited[nhb]) {
      if (!dfs(nhb, graph, visited, pathVisited, ans)) return false;
    } else if (pathVisited[nhb]) return false;
  }

  ans.push(i);
  pathVisited[i] = false;
  return true;
}

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]));
