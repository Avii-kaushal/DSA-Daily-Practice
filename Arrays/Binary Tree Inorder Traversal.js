// Time Complexity: O(N) --- Recursive Approach
// Space Complexity: O(H) + O(N) for recursion stack and result array

var inorderTraversal = function(root) {

    let result = [];

    function inorder(node) {

        if (!node) return;

        // Step 1: Traverse left subtree
        inorder(node.left);

        // Step 2: Store current node
        result.push(node.val);

        // Step 3: Traverse right subtree
        inorder(node.right);
    }

    inorder(root);

    return result;
};