function topoSort(V, adj) {
  const indegrees = new Array(V).fill(0);

  for (let node of adj) {
    for (let nhb of node) {
      indegrees[nhb]++;
    }
  }

  const queue = [];

  for (let i = 0; i < V; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  const topo = [];

  while (queue.length) {
    let node = queue.shift();
    topo.push(node);

    for (let nhb of adj[node]) {
      indegrees[nhb]--;
      if (indegrees[nhb] === 0) {
        queue.push(nhb);
      }
    }
  }

  if (topo.length === V) {
    return true;
  }

  return [];
}
