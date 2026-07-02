// Time Complexity: O(n) 
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