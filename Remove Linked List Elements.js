// Time Complexity: O(n) --- Optimal Approach
// Space Complexity: O(1)

var removeElements = function(head, val) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next !== null) {

        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }

    }

    return dummy.next;
};




// Time Complexity: O(n) --- Brute Force
// Space Complexity: O(n)

var removeElements = function(head, val) {
    let nodes = [];
    let curr = head;

    while (curr !== null) {
        if (curr.val !== val) {
            nodes.push(curr);
        }
        curr = curr.next;
    }

    // Reconnect remaining nodes
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    if (nodes.length === 0) {
        return null;
    }

    nodes[nodes.length - 1].next = null;

    return nodes[0];
};