var minDepth = function(root) {
    let min = Infinity;

    function traverse(node, height) {
        if (!node) return;
        
        if (!node.left && !node.right) {
            min = Math.min(min, height);
            return;
        }

        traverse(node.left, height + 1);
        traverse(node.right, height + 1);

        
    }   

    traverse(root, 1); 

    return min === Infinity ? 0 : min;
};