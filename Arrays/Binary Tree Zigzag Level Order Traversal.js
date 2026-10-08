// Time Complexity: O(n)                      BFS + Reverse  ---  Brute Force Approach
// Space Complexity: O(n)

function zigzagLevelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let head = 0;
    let leftToRight = true;

    while (head < queue.length) {
        let size = queue.length - head;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue[head++];
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (!leftToRight) {
            level.reverse();
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
}