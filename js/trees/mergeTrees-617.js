var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  const mergedTree = new TreeNode(root1.val + root2.val);

  mergedTree.left = mergeTrees(root1.left, root2.left);
  mergedTree.right = mergeTrees(root1.right, root2.right);

  return mergedTree;
};
