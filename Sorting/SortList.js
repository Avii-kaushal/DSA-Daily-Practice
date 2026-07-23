// Time Complexity: O(n log n)                           
// Space Complexity: O(n)

var sortList = function (head) {
    if (head === null) return null;

    let values = [];
    let current = head;

    // Store all values
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    // Sort the array
    values.sort((a, b) => a - b);

    // Create new sorted linked list
    let dummy = new ListNode(0);
    current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};