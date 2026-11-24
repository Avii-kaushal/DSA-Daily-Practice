
/*
Time Complexity: O(N log N)
Space Complexity: O(N)
*/

var recoverTree = function(root) {
    const nodes = [];

    // Store nodes in inorder sequence
    function inorder(node) {
        if (node === null) return;

        inorder(node.left);
        nodes.push(node);
        inorder(node.right);
    }

    inorder(root);

    // Get sorted values
    const sortedValues = nodes.map(node => node.val).sort((a, b) => a - b);

    // Restore correct values
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].val = sortedValues[i];
    }
};
