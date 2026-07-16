// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    // Find the length and last node
    let length = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    // Reduce unnecessary rotations
    k = k % length;

    if (k === 0) {
        return head;
    }

    // Make the list circular
    tail.next = head;

    // Find the new tail
    let steps = length - k;
    let newTail = head;

    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }

    // Break the circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};



// Time Complexity: O(n + k)                               ---     Brute Force
// Space Complexity: O(1)

var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    // Find length
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    k = k % length;

    // Rotate one step at a time
    while (k > 0) {
        let prev = null;
        let curr = head;

        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }

        // Move last node to front
        prev.next = null;
        curr.next = head;
        head = curr;

        k--;
    }

    return head;
};