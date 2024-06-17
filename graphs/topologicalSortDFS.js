function topoSort(V, adj) {
  const topSort = [];
  const visited = new Array(V).fill(false);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, visited, topSort);
    }
  }

  return topSort.reverse();

  function dfs(i) {
    visited[i] = true;

    for (let nhb of adj[i]) {
      if (!visited[nhb]) {
        console.log(nhb);
        dfs(nhb);
      }
    }

    topSort.push(i);
  }
}

console.log(topoSort(3, [[1], [], [1]]));
