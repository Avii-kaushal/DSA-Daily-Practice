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