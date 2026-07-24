// Time Complexity: O(N log k)                               ---     Optimal Approach
// Space Complexity: O(log k)

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

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

    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            let list1 = lists[i];
            let list2 = i + 1 < lists.length ? lists[i + 1] : null;

            mergedLists.push(merge(list1, list2));
        }

        lists = mergedLists;
    }

    return lists[0];
};



// Time Complexity: O(N log N)                               ---     Brute Force
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