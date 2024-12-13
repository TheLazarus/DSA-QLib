var findTilt = function (root) {
  let tilt = 0;
  function traverse(node) {
    if (!node) return 0;

    const leftVal = traverse(node.left);
    const rightVal = traverse(node.right);
    const tempVal = node.val;

    node.val = Math.abs(leftVal - rightVal);
    tilt += node.val;

    return tempVal + leftVal + rightVal;
  }

  traverse(root);
  return tilt;
};
