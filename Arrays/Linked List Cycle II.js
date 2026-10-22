// Time Complexity: O(n) --- Optimal Approach
// Space Complexity: O(1)

function detectCycle(head) {
    let slow = head;
    let fast = head;

    // Step 1: Detect whether a cycle exists
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Step 2: Find the cycle's starting node
            slow = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
}






// Time Complexity: O(n) --- Brute Force Approach
// Space Complexity: O(n)

function detectCycle(head) {
    let visited = new Set();
    let current = head;

    while (current !== null) {
        if (visited.has(current)) {
            return current;
        }

        visited.add(current);
        current = current.next;
    }

    return null;
}