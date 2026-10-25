// Time Complexity: Exponential --- Brute Force Approach
// Space Complexity: O(n) --- Recursion Stack

function numTrees(n) {
    function solve(start, end) {
        if (start > end) return 1;

        let total = 0;

        for (let root = start; root <= end; root++) {
            let left = solve(start, root - 1);
            let right = solve(root + 1, end);

            total += left * right;
        }

        return total;
    }

    return solve(1, n);
}