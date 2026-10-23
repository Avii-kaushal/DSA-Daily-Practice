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