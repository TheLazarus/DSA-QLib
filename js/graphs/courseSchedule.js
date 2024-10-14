function courseSchedule(numCourses, preRequisites) {
  const graph = new Array(numCourses).fill(-1).map(() => new Array());

  for (let prereq of preRequisites) {
    const [course, dep] = prereq;

    graph[dep].push(course);
  }

  // Need to identify cycles in the directed graph

  const visited = new Array(numCourses).fill(false);
  const pathVisited = new Array(numCourses).fill(false);

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      if (!dfs(i, visited, pathVisited, graph)) return false;
    }
  }

  return true;
}

function dfs(node, visited, pathVisited, graph) {
  visited[node] = true;
  pathVisited[node] = true;

  for (let nhb of graph[node]) {
    if (!visited[nhb]) {
      if (!dfs(nhb, visited, pathVisited, graph)) return false;
    } else if (pathVisited[nhb]) return false;
  }
  pathVisited[node] = false;
  return true;
}

console.log(courseSchedule(2, [[1,0],[0,1]]));
