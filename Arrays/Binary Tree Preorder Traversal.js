
/*
Time Complexity: O(N)
Space Complexity: O(H) recursion stack
*/

var preorderTraversal = function(root) {
    const result = [];

    function preorder(node) {
        // Base case
        if (node === null) return;

        // Visit root
        result.push(node.val);

        // Traverse left subtree
        preorder(node.left);

        // Traverse right subtree
        preorder(node.right);
    }

    preorder(root);

    return result;
};
