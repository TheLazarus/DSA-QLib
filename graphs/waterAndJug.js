function waterAndJug(x, y, target) {
  let totalWater = x + y;
  let queue = [];

  let visited = new Array(totalWater + 1).fill(false);

  queue.push(0);
  visited[0] = true;

  while (queue.length) {
    const node = queue.shift();

    for (let del of [x, -x, y, -y]) {
      const newNode = node + del;

      if (newNode === target) return true;
      else if (newNode >= 0 && newNode <= totalWater && !visited[newNode]) {
        visited[newNode] = true;
        queue.push(newNode);
      }
    }
  }

  return false;
}

console.log(waterAndJug(2, 6, 5));
