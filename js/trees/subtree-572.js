var isSubtree = function (root, subRoot) {
  const subRootOrigins = [];

  function findSubRootOrigins(node) {
    if (node === null) return;

    if (node.val === subRoot.val) {
      subRootOrigins.push(node);
    }
    findSubRootOrigins(node.left);
    findSubRootOrigins(node.right);
  }

  findSubRootOrigins(root);

  function checkIfSubroot(node1, node2) {
    if (node1 === null && node2 === null) return true;

    if (
      (node1 === null && node2) ||
      (node1 && node2 === null) ||
      node1.val !== node2.val
    )
      return false;

    return (
      !!checkIfSubroot(node1.left, node2.left) &&
      !!checkIfSubroot(node1.right, node2.right)
    );
  }

  for (const subRootOrigin of subRootOrigins) {
    if (checkIfSubroot(subRootOrigin, subRoot)) {
      return true;
    }
  }
  return false;
};
