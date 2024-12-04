let tree1 = {
  val: 1,
  left: {
    val: 2,
  },
};

let tree2 = {
  val: 1,
  right: {
    val: 2,
  },
};

var isSameTree = function (p, q) {
  const preTravOne = [];
  const preTravTwo = [];

  function traverse(node, trav) {
    if (!node) {
      trav.push(null);
      return;
    }

    trav.push(node.val);
    traverse(node.left, trav);
    traverse(node.right, trav);
  }

  traverse(p, preTravOne);
  traverse(q, preTravTwo);

  if (preTravOne.length !== preTravTwo.length) return false;

  console.log(preTravOne);
  console.log(preTravTwo);

  for (let i = 0; i < preTravOne.length; i++) {
    if (preTravOne[i] !== preTravTwo[i]) return false;
  }

  return true;
};

console.log(isSameTree(tree1, tree2));
