var countNodes = function (root) {
    const ans = [];

    function traverse(node) {
      if (node === null) return;
  
      traverse(node.left);
      ans.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
  
    return ans.length;
};
