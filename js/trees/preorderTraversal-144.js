var preorderTraversal = function (root) {
  const ans = [];

  function traverse(node) {
    if (node === null) return;

    ans.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return ans;
};


