var binaryTreePaths = function(root) {

    const paths = [];

    function traverse(node, ds) {

        if (!node) return;

        traverse(node.left, [...ds, node.val]);
        traverse(node.right, [...ds, node.val]);
        
        if (!node.left && !node.right) {
             paths.push([...ds, node.val]);
        }
       

    }   

    traverse(root, [])
    const ans = paths.map((path) => path.join("->"));
    return ans;
};