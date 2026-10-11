// Time Complexity: O(m * n)                  Dynamic Programming  ---  Optimal Approach
// Space Complexity: O(m * n)

function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    dp[0][0] = grid[0][0];

    // First row: can only come from the left
    for (let col = 1; col < n; col++) {
        dp[0][col] = dp[0][col - 1] + grid[0][col];
    }

    // First column: can only come from above
    for (let row = 1; row < m; row++) {
        dp[row][0] = dp[row - 1][0] + grid[row][0];
    }

    // Fill remaining cells
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] = grid[row][col] +
                Math.min(
                    dp[row - 1][col],
                    dp[row][col - 1]
                );
        }
    }

    return dp[m - 1][n - 1];
}



// Time Complexity: O(2^(m+n))                 Recursion  ---  Brute Force Approach
// Space Complexity: O(m+n)

function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;

    function solve(row, col) {
        if (row >= m || col >= n) {
            return Infinity;
        }

        if (row === m - 1 && col === n - 1) {
            return grid[row][col];
        }

        let right = solve(row, col + 1);
        let down = solve(row + 1, col);

        return grid[row][col] + Math.min(right, down);
    }

    return solve(0, 0);
}