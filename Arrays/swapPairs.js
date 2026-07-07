// Time Complexity: O(n) 
// Space Complexity: O(n)

var swapPairs = function (head) {
    if (head === null) return null;

    let values = [];
    let current = head;

    // Store all node values
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    // Swap adjacent values
    for (let i = 0; i < values.length - 1; i += 2) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
    }

    // Create a new linked list
    let dummy = new ListNode(0);
    current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};