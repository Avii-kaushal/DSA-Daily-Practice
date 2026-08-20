// Time Complexity: O(n)                            
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