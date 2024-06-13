function numberOfProvinces(isConnected) {
  // Find number of cities
  // Make an array to store the adjacency list for these many cities
  const numberOfCities = isConnected.length;
  let adjList = new Array(numberOfCities).fill(-1).map(() => new Array());

  // Loop throught the matrix and populate the adjacency list

  for (let i = 0; i < numberOfCities; i++) {
    for (let j = 0; j < numberOfCities; j++) {
      if (isConnected[i][j] === 1 && i !== j) {
        adjList[i].push(j);
      }
    }
  }

  // Start BFS from every possible starting point given that it is not visited
  // [[1], [0], []];
  let numberOfProvinces = 0;
  let visited = new Array(numberOfCities).fill(false);

  for (let i = 0; i < adjList.length; i++) {
    if (!visited[i]) {
      let queue = [i];
      visited[i] = true;

      bfs(queue, visited, adjList);
      numberOfProvinces++;
    }
  }
  return numberOfProvinces;
}

function bfs(queue, visited, adjList) {
  while (queue.length) {
    let currentNode = queue.shift();

    for (let neighbour of adjList[currentNode]) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }
}

console.log(
  numberOfProvinces([
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ])
);
