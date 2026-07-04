// Time Complexity: O(n + m)                               ---     Brute Force
// Space Complexity: O(n + m)

var mergeTwoLists = function (list1, list2) {
    let values = [];

    // Store values from first list
    while (list1 !== null) {
        values.push(list1.val);
        list1 = list1.next;
    }

    // Store values from second list
    while (list2 !== null) {
        values.push(list2.val);
        list2 = list2.next;
    }

    // Sort all values
    values.sort((a, b) => a - b);

    // Create a new linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};