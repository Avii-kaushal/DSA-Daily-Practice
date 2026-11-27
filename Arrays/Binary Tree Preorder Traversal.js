
/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

var preorderTraversal = function(root) {
    const result = [];
    const stack = [];

    // Handle empty tree
    if (root === null) return result;

    // Start with root
    stack.push(root);

    while (stack.length > 0) {
        // Remove the top node
        const current = stack.pop();

        // Visit root
        result.push(current.val);

        // Push right child first
        if (current.right !== null) {
            stack.push(current.right);
        }

        // Push left child second
        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return result;
};




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
