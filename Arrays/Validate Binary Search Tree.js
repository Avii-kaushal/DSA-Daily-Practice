// Time Complexity: O(N²) --- Brute Force Approach
// Space Complexity: O(H)

var isValidBST = function(root) {

    if (!root) return true;

    // Find maximum value in the subtree
    function findMax(node) {

        if (!node) return -Infinity;

        return Math.max(
            node.val,
            findMax(node.left),
            findMax(node.right)
        );
    }

    // Find minimum value in the subtree
    function findMin(node) {

        if (!node) return Infinity;

        return Math.min(
            node.val,
            findMin(node.left),
            findMin(node.right)
        );
    }

    // Check left subtree maximum
    if (root.left && findMax(root.left) >= root.val) {
        return false;
    }

    // Check right subtree minimum
    if (root.right && findMin(root.right) <= root.val) {
        return false;
    }

    // Recursively validate left and right subtrees
    return isValidBST(root.left) &&
           isValidBST(root.right);
};