// Time Complexity: O(n) 
// Space Complexity: O(n)

var deleteDuplicates = function (head) {
    let frequency = new Map();
    let current = head;

    // Count frequency of every value
    while (current !== null) {
        frequency.set(
            current.val,
            (frequency.get(current.val) || 0) + 1
        );

        current = current.next;
    }

    // Create a new list containing only unique values
    let dummy = new ListNode(0);
    let tail = dummy;

    current = head;

    while (current !== null) {
        if (frequency.get(current.val) === 1) {
            tail.next = new ListNode(current.val);
            tail = tail.next;
        }

        current = current.next;
    }

    return dummy.next;
};