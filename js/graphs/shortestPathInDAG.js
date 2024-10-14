function shortestPath(n, m, edges) {
  const adjList = new Array(n).fill(-1).map(() => new Array());

  for (let i = 0; i < m; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    let edgeWeight = edges[i][2];

    adjList[u].push([v, edgeWeight]);
  }

  // Find topo sort

  let visited = new Array(n).fill(false);
  let stack = new Array();

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      topoSort(i, adjList, visited, stack);
    }
  }

  function topoSort(i, adjList, visited, stack) {
    visited[i] = true;

    for (let nhb of adjList[i]) {
      const [nhbNode] = nhb;
      if (!visited[nhbNode]) {
        topoSort(nhbNode, adjList, visited, stack);
      }
    }
    stack.push(i);
  }

  // Step 2 - Do the distance logic, relax the edges from the topo sort

  const distance = new Array(n).fill(Infinity);
  distance[0] = 0;

  while (stack.length) {
    let node = stack.pop();

    for (let nhb of adjList[node]) {
      let [nhbNode, weight] = nhb;

      if (distance[node] + weight < distance[nhbNode]) {
        distance[nhbNode] = distance[node] + weight;
      }
    }
  }

  return distance;
}
