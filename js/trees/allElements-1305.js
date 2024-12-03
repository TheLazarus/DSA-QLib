var getAllElements = function (root1, root2) {
  const el1 = [];
  const el2 = [];

  function traverse(node, el) {
    if (!node) return;

    el.push(node.val);
    traverse(node.left, el);
    traverse(node.right, el);
  }

  traverse(root1, el1);
  traverse(root2, el2);

  const ans = [...el1, ...el2];
  ans.sort((a, b) => a - b);

  return ans;
};
