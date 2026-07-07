// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var swapPairs = function (head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next;
        let second = first.next;

        // Swap the pair
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move to the next pair
        prev = first;
    }

    return dummy.next;
};

// Time Complexity: O(n)                               ---     Brute Force
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