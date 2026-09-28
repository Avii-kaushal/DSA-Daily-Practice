// Time Complexity: O(n)                      Two Pointer Approach  ---  Optimal Approach
// Space Complexity: O(1)

function partition(head, x) {

    // Dummy nodes for both partitions
    let lessDummy = new ListNode(0);
    let greaterDummy = new ListNode(0);

    let less = lessDummy;
    let greater = greaterDummy;

    let current = head;

    while (current !== null) {

        if (current.val < x) {

            // Add to less list
            less.next = current;
            less = less.next;

        } else {

            // Add to greater/equal list
            greater.next = current;
            greater = greater.next;
        }

        current = current.next;
    }

    // Connect both lists
    less.next = greaterDummy.next;

    // Important: terminate the list
    greater.next = null;

    return lessDummy.next;
}





// Time Complexity: O(n)                      Array Approach  ---  Brute Force Approach
// Space Complexity: O(n)

function partition(head, x) {

    let nodes = [];
    let current = head;

    // Store all nodes
    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    let less = [];
    let greaterEqual = [];

    // Separate nodes
    for (let node of nodes) {

        if (node.val < x) {
            less.push(node);
        } else {
            greaterEqual.push(node);
        }
    }

    // Combine both arrays
    let result = [...less, ...greaterEqual];

    // Reconnect nodes
    for (let i = 0; i < result.length - 1; i++) {
        result[i].next = result[i + 1];
    }

    if (result.length > 0) {
        result[result.length - 1].next = null;
    }

    return head;
}