// Time Complexity: O(n)                  
// Space Complexity: O(n)

var reverseKGroup = function (head, k) {
    if (head === null) return null;

    let values = [];
    let current = head;

    // Store node values
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    // Reverse every k-sized block
    for (let i = 0; i + k <= values.length; i += k) {
        let left = i;
        let right = i + k - 1;

        while (left < right) {
            [values[left], values[right]] = [values[right], values[left]];
            left++;
            right--;
        }
    }

    // Build new linked list
    let dummy = new ListNode(0);
    current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};