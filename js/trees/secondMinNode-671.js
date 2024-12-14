var findSecondMinimumValue = function (root) {
  const preOrderTraversal = [];

  function traverse(node) {
    if (!node) return;

    preOrderTraversal.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  preOrderTraversal.sort((a, b) => a - b);

  const preOrderTraversalSet = new Set(preOrderTraversal);
  const preOrderTravWithoutDup = [...preOrderTraversalSet];

  const length = preOrderTravWithoutDup.length;

  if (!length || length < 2) return -1;

  return preOrderTravWithoutDup[1];
};
