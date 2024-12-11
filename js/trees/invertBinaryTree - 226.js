var invertTree = function(root) {

    function invert(node) {
        if (!node) return;

        [node.left, node.right] = [node.right, node.left];

        invert(node.left);
        invert(node.right);
    }       

    if (!root) return root;

    invert(root);
    return root;
};