var findChampion = function (n, edges) {
  let adjList = new Array(n).fill(-1).map(() => new Array());

  let indegrees = new Array(n).fill(0);

  // Find indegrees

  for (let i = 0; i < edges.length; i++) {
    const [src, dest] = edges[i];
    adjList[src].push(dest);
    indegrees[dest]++;
  }

  // If we have multiple elements with indegree 0, that means we can bail out early as a champion can't exist in this case

  let elementsWithZeroIndegrees = indegrees.filter(
    (indegree) => indegree === 0
  ).length;

  if (elementsWithZeroIndegrees !== 1) return -1;

  // Do a topo sort

  let stack = new Array();
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      topoSort(i, adjList, visited, stack);
    }
  }

  function topoSort(node, adjList, visited, stack) {
    visited[node] = true;

    for (let nhb of adjList[node]) {
      if (!visited[nhb]) {
        topoSort(nhb, adjList, visited, stack);
      }
    }
    stack.push(node);
  }

  // The element at the top of the stack will be the one which has an indegree of 0, and that's gonna be our champion
  return stack.pop();
};
