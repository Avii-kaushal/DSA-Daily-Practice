// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from the end
    slow.next = slow.next.next;

    return dummy.next;
};


// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(n)

var removeNthFromEnd = function (head, n) {
    let nodes = [];
    let current = head;

    // Store all nodes in an array
    while (current) {
        nodes.push(current);
        current = current.next;
    }

    let index = nodes.length - n;

    // If removing the head node
    if (index === 0) {
        return head.next;
    }

    // Skip the target node
    nodes[index - 1].next = nodes[index].next;

    return head;
};