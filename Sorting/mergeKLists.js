// Time Complexity: O(N log N)           
// Space Complexity: O(N)

var mergeKLists = function (lists) {
    let values = [];

    // Store all node values
    for (let list of lists) {
        while (list !== null) {
            values.push(list.val);
            list = list.next;
        }
    }

    // Sort all values
    values.sort((a, b) => a - b);

    // Create new sorted linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of values) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};