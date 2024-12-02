var postorderTraversal = function (root) {
    const ans = [];

    function traverse(node) {
        if (node === null) return;

        traverse(node.left);
        traverse(node.right);
        ans.push(node.val);
    }

    traverse(root);

    return ans;
};
