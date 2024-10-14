var canVisitAllRooms = function (rooms) {
  let numberOfRooms = rooms.length;

  let visited = new Array(numberOfRooms).fill(false);

  visit(0, rooms, visited);

  for (let vis of visited) {
    if (vis === false) {
      return false;
    }
  }

  return true;
};

function visit(node, rooms, visited) {
  visited[node] = true;

  for (let nhb of rooms[node]) {
    if (!visited[nhb]) {
      visit(nhb, rooms, visited);
    }
  }
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
