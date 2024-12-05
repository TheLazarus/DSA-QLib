const sortedArray = [-10,-3,0,5,9]


function TreeNode(val) {
    this.val = val;
}

var sortedArrayToBST = function (nums) {
  function makeBST(nodes) {
    if (nodes.length === 0) return null;
    const length = nodes.length;
    const mid = Math.floor(length / 2);

    let node = new TreeNode(nodes[mid]);

    if (mid === 0) {
      return node;
    }

    node.left = makeBST(nodes.slice(0, mid));
    node.right = makeBST(nodes.slice(mid + 1, length));

    return node;
  }

  const root = makeBST(nums);
  return root;
};

console.log(sortedArrayToBST(sortedArray));
