// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var deleteDuplicates = function (head) {
    // Dummy node handles duplicates at the head
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current !== null) {

        // Check if current node has duplicates
        if (
            current.next !== null &&
            current.val === current.next.val
        ) {
            let duplicateValue = current.val;

            // Skip all nodes having the duplicate value
            while (
                current !== null &&
                current.val === duplicateValue
            ) {
                current = current.next;
            }

            // Connect previous distinct node
            // directly to the next distinct node
            prev.next = current;
        } else {
            // Current node is unique
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
};



// Time Complexity: O(n)                               ---     Brute Force
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