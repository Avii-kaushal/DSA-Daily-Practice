// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var reverseKGroup = function (head, k) {
    if (head === null || k === 1) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {

        // Find the kth node
        let kth = groupPrev;

        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next;
        }

        if (kth === null) {
            break;
        }

        let groupNext = kth.next;

        // Reverse current group
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect reversed group
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};





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