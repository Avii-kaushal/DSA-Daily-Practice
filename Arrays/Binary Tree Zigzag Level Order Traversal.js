// Time Complexity: O(n)                      BFS + Indexing  ---  Optimal Approach
// Space Complexity: O(n)

function zigzagLevelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let head = 0;
    let leftToRight = true;

    while (head < queue.length) {
        let size = queue.length - head;
        let level = new Array(size);

        for (let i = 0; i < size; i++) {
            let node = queue[head++];

            let index = leftToRight ? i : size - 1 - i;
            level[index] = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        leftToRight = !leftToRight;
    }

    return result;
}




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