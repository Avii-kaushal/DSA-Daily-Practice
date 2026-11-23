
/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    // Move slow by 1 step and fast by 2 steps
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Slow pointer reaches the middle node
    return slow;
};






/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

var middleNode = function(head) {
    let length = 0;
    let current = head;

    // First traversal: count total nodes
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Calculate middle index
    let middleIndex = Math.floor(length / 2);

    current = head;

    // Second traversal: reach the middle node
    for (let i = 0; i < middleIndex; i++) {
        current = current.next;
    }

    return current;
};
