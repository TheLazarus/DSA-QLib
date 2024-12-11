
// Make a graph first, then run DFS -> Throws TLE on LeetCode though 
  var diameterOfBinaryTree = function (root) {
    const adjList = new Map();
  
    function makeGraph(node) {
      if (!node) return;
  
      if (node.left) {
        if (!adjList.get(node)) {
          adjList.set(node, [node.left]);
        } else {
          const currNs = adjList.get(node);
          const newNs = [...currNs, node.left];
          adjList.set(node, newNs);
        }
  
        if (!adjList.get(node.left)) {
          adjList.set(node.left, [node]);
        } else {
          const currNs = adjList.get(node.left);
          const newNs = [...currNs, node];
          adjList.set(node.left, newNs);
        }
        makeGraph(node.left);
      }
      if (node.right) {
        if (!adjList.get(node)) {
          adjList.set(node, [node.right]);
        } else {
          const currNs = adjList.get(node);
          const newNs = [...currNs, node.right];
          adjList.set(node, newNs);
        }
  
        if (!adjList.get(node.right)) {
          adjList.set(node.right, [node]);
        } else {
          const currNs = adjList.get(node.right);
          const newNs = [...currNs, node];
          adjList.set(node.right, newNs);
        }
        makeGraph(node.right);
      }
    }
  
    makeGraph(root);
  
    // After making the graph, run DFS on each node
  
    const nodes = [...adjList.keys()];
   
    let max = -Infinity;
  
    function dfs(node, visited, dia) {
      visited.set(node, true);
      max = Math.max(max, dia);
      const ns = adjList.get(node);
  
      for (let n of ns) {
        if (!visited.get(n)) {
          dfs(n, visited, dia + 1);
        }
      }
    }
  
    for (let node of [...nodes]) {
      const visited = new Map();
      dfs(node, visited, 0);
    }
  
    return max === -Infinity ? 0 : max;
  };
  