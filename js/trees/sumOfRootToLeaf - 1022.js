var sumRootToLeaf = function (root) {
  return dfs(root, "");

  function dfs(node, digits) {
    if (!node) return 0;

    if (!node.left && !node.right) {
      return parseInt(`${digits}${node.val}`, 2);
    }

    return (
      dfs(root.left, `${digits}${root.val}`) +
      dfs(root.right, `${digits}${root.val}`)
    );
  }
};
