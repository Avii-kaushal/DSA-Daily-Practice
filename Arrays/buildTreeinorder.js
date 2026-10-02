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