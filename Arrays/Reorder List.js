// Time Complexity: O(n)                      Fast & Slow Pointer  ---   Optimal Approach
// Space Complexity: O(1)

function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    // --------------------------------
    // Step 1: Find the middle
    // --------------------------------

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Second half starts after slow
    let second = slow.next;

    // Split the list
    slow.next = null;


    // --------------------------------
    // Step 2: Reverse second half
    // --------------------------------

    let prev = null;
    let current = second;

    while (current) {
        let next = current.next;

        current.next = prev;

        prev = current;
        current = next;
    }

    // prev is now the head of reversed second half
    second = prev;


    // --------------------------------
    // Step 3: Merge both halves
    // --------------------------------

    let first = head;

    while (second) {

        let firstNext = first.next;
        let secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
}




// Time Complexity: O(n)                      Array Approach  ---   Brute Force Approach
// Space Complexity: O(n)

function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    let nodes = [];
    let current = head;

    // Store all nodes in an array
    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {

        // Connect left node to right node
        nodes[left].next = nodes[right];
        left++;

        // Connect right node to next left node
        nodes[right].next = nodes[left];
        right--;
    }

    // Last node should point to null
    nodes[left].next = null;
}