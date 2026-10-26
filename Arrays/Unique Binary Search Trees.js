// Time Complexity: O(n²) --- Optimal DP Approach
// Space Complexity: O(n)

function numTrees(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let root = 1; root <= i; root++) {
            let left = dp[root - 1];
            let right = dp[i - root];

            dp[i] += left * right;
        }
    }

    return dp[n];
}



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