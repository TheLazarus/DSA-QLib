function detectCycle(V, adjList) {
  const visited = new Array(V).fill(false);

  const queue = [[0, -1]];
  visited[0] = true;

  while (queue.length) {
    const node = queue.shift();

    const [id, parent] = node;
                               
    for (let nhb of adjList[id]) {
      if (!visited[nhb]) {
        visited[id] = true;
        queue.push([nhb, id]);
      } else if (parent !== nhb) {
        return true;
      }
    }
  }

  return false;
}

console.log(detectCycle(4, [[], [2], [1, 3], [2]]));
