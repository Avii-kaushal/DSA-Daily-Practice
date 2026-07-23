// Time Complexity: O(n log n)                               ---     Optimal Approach
// Space Complexity: O(log n)

var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    // Find the middle of the list
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(mid);

    // Merge sorted halves
    return merge(left, right);
};

function merge(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
}



// Time Complexity: O(n log n)                               ---     Brute Force
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