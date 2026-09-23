// Time Complexity: O(n)                      Array Approach  ---   Brute Force Approach
// Space Complexity: O(n)

function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    let nodes = [];
    let current = head;

    // Store all nodes in an array
    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {

        // Connect left node to right node
        nodes[left].next = nodes[right];
        left++;

        // Connect right node to next left node
        nodes[right].next = nodes[left];
        right--;
    }

    // Last node should point to null
    nodes[left].next = null;
}