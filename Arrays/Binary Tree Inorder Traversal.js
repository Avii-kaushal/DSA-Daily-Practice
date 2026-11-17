// Time Complexity: O(N) --- Optimal Approach
// Space Complexity: O(H) + O(N) for stack and result array

var inorderTraversal = function(root) {

    let result = [];
    let stack = [];

    let current = root;

    while (current || stack.length > 0) {

        // Traverse left subtree and push nodes
        while (current) {

            stack.push(current);

            current = current.left;
        }

        // Process the top node
        current = stack.pop();

        result.push(current.val);

        // Move to right subtree
        current = current.right;
    }

    return result;
};





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