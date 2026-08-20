// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var deleteDuplicates = function (head) {
    let current = head;

    while (current !== null && current.next !== null) {

        // If current and next have the same value
        if (current.val === current.next.val) {

            // Skip the duplicate node
            current.next = current.next.next;

        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
};


// Time Complexity: O(n)                                   ---     Brute Force
// Space Complexity: O(n)

var deleteDuplicates = function (head) {
    if (head === null) {
        return null;
    }

    let seen = new Set();

    let current = head;
    let previous = null;

    while (current !== null) {

        // Duplicate found
        if (seen.has(current.val)) {

            // Remove current node
            previous.next = current.next;

        } else {

            // First occurrence
            seen.add(current.val);
            previous = current;
        }

        current = current.next;
    }

    return head;
};