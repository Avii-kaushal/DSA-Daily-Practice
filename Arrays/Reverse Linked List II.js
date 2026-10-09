// Time Complexity: O(n)                      Pointer Manipulation  ---  Optimal Approach
// Space Complexity: O(1)

function reverseBetween(head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    // Move prev to the node before position left
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    // Reverse the section by moving nodes to the front
    for (let i = 0; i < right - left; i++) {
        let nextNode = current.next;

        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
}





// Time Complexity: O(n)                      Array + Reverse  ---  Brute Force Approach
// Space Complexity: O(n)

function reverseBetween(head, left, right) {
    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    let start = left - 1;
    let end = right - 1;

    while (start < end) {
        [values[start], values[end]] = [values[end], values[start]];
        start++;
        end--;
    }

    current = head;
    let i = 0;

    while (current !== null) {
        current.val = values[i++];
        current = current.next;
    }

    return head;
}