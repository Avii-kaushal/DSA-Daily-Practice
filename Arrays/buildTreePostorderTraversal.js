// Time Complexity: O(n)                      Hash Map + Recursion  ---  Optimal Approach
// Space Complexity: O(n)

function buildTree(inorder, postorder) {

    // Store inorder value -> index
    let inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function build(left, right) {

        // No elements
        if (left > right) {
            return null;
        }

        // Last element in postorder is root
        let rootValue = postorder[postIndex--];

        let root = new TreeNode(rootValue);

        // Find root position in inorder
        let rootIndex = inorderMap.get(rootValue);

        // IMPORTANT:
        // Build right first because we are
        // traversing postorder from RIGHT to LEFT
        root.right = build(rootIndex + 1, right);

        root.left = build(left, rootIndex - 1);

        return root;
    }

    return build(0, inorder.length - 1);
}





// Time Complexity: O(n^2)                 Recursive + indexOf  ---  Brute Force Approach
// Space Complexity: O(n)

function buildTree(inorder, postorder) {

    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    // Last element of postorder is the root
    let rootValue = postorder[postorder.length - 1];

    let root = new TreeNode(rootValue);

    // Find root in inorder
    let rootIndex = inorder.indexOf(rootValue);

    // Left subtree
    let leftInorder = inorder.slice(0, rootIndex);
    let leftPostorder = postorder.slice(0, rootIndex);

    // Right subtree
    let rightInorder = inorder.slice(rootIndex + 1);
    let rightPostorder = postorder.slice(rootIndex, postorder.length - 1);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
}