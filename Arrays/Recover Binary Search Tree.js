
/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

var recoverTree = function(root) {
    let first = null;
    let second = null;
    let previous = null;
    let current = root;

    // Detect swapped nodes
    function detect(node) {
        if (previous !== null && previous.val > node.val) {
            if (first === null) {
                first = previous;
            }

            second = node;
        }

        previous = node;
    }

    // Morris inorder traversal
    while (current !== null) {
        if (current.left === null) {
            detect(current);
            current = current.right;
        } else {
            let predecessor = current.left;

            // Find rightmost node in left subtree
            while (
                predecessor.right !== null &&
                predecessor.right !== current
            ) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                // Create temporary thread
                predecessor.right = current;
                current = current.left;
            } else {
                // Remove temporary thread
                predecessor.right = null;

                detect(current);
                current = current.right;
            }
        }
    }

    // Restore the swapped values
    [first.val, second.val] = [second.val, first.val];
};





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
