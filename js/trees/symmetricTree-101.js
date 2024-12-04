    const tree = {
    val: 2,
    left: {
        val: 3,
        left: {
        val: 4,
        },
        right: {
        val: 5,
        },
    },
    right: {
        val: 3,
        right: {
        val: 4,
        },
    },
    };

    var isSymmetric = function (root) {
    function checkSymmetry(leftNode, rightNode) {
        if ((!leftNode && rightNode) || (leftNode && !rightNode)) return false;

        if (!leftNode && !rightNode) return true;

        return (
        leftNode.val === rightNode.val &&
        checkSymmetry(leftNode.left, rightNode.right) &&
        checkSymmetry(leftNode.right, rightNode.left)
        );
    }

    return checkSymmetry(root.left, root.right);
    };

    console.log(isSymmetric(tree));
