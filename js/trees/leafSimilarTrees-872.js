var leafSimilar = function (root1, root2) {
  const firstLeafSequence = [];
  const secondLeafSequence = [];

  function traverse(node, seq) {
    if (!node) return;
    if (!node.left && !node.right) {
      seq.push(node.val);
      return;
    }

    traverse(node.left, seq);
    traverse(node.right, seq);
  }

  traverse(root1, firstLeafSequence);
  traverse(root2, secondLeafSequence);

  if (firstLeafSequence.length !== secondLeafSequence.length) return false;

  for (let i = 0; i < firstLeafSequence.length; i++) {
    if (firstLeafSequence[i] !== secondLeafSequence[i]) return false;
  }

  return true;
};
