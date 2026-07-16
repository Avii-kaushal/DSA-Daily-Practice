// Time Complexity: O(n + k)                               
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