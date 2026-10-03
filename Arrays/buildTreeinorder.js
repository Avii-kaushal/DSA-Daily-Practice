// Time Complexity: O(n^2)                 Recursive + indexOf  ---  Brute Force Approach
// Space Complexity: O(n)

function buildTree(inorder, postorder) {

    if (inorder.length === 0) {
        return null;
    }

    // Last element of postorder is the root
    let rootValue = postorder[postorder.length - 1];

    let root = new TreeNode(rootValue);

    // Find root in inorder
    let rootIndex = inorder.indexOf(rootValue);

    // Divide inorder
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);

    // Divide postorder
    let leftPostorder = postorder.slice(0, rootIndex);
    let rightPostorder = postorder.slice(rootIndex, postorder.length - 1);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
}




// Time Complexity: O(n)                  HashMap + Recursion  ---  Optimal Approach
// Space Complexity: O(n)

function buildTree(inorder, postorder) {

    let inorderMap = new Map();

    // Store value -> index
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function build(left, right) {

        // No elements
        if (left > right) {
            return null;
        }

        // Last element in postorder is the root
        let rootValue = postorder[postIndex--];

        let root = new TreeNode(rootValue);

        // Find root index in inorder
        let rootIndex = inorderMap.get(rootValue);

        // Build RIGHT first because we're
        // traversing postorder from right to left
        root.right = build(rootIndex + 1, right);

        // Build LEFT
        root.left = build(left, rootIndex - 1);

        return root;
    }

    return build(0, inorder.length - 1);
}