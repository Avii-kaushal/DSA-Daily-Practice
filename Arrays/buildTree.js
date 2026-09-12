// Time Complexity: O(n^2)
// Space Complexity: O(n)                 Brute Force Approach

function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    // First element of preorder is always the root
    let rootValue = preorder[0];
    let root = new TreeNode(rootValue);

    // Find root in inorder
    let rootIndex = inorder.indexOf(rootValue);

    // Elements before root belong to left subtree
    let leftInorder = inorder.slice(0, rootIndex);

    // Elements after root belong to right subtree
    let rightInorder = inorder.slice(rootIndex + 1);

    // Build left and right preorder arrays
    let leftPreorder = preorder.slice(1, rootIndex + 1);
    let rightPreorder = preorder.slice(rootIndex + 1);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}


// Driver Code
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
// Output: [3,9,20,null,null,15,7]