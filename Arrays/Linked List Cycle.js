// Time Complexity: O(n) --- Optimal Approach
// Space Complexity: O(1)

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}





// Time Complexity: O(n) --- Brute Force Approach
// Space Complexity: O(n)

function hasCycle(head) {
    let visited = new Set();
    let current = head;

    while (current !== null) {
        if (visited.has(current)) {
            return true;
        }

        visited.add(current);
        current = current.next;
    }

    return false;
}