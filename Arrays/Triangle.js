// Time Complexity: O(n^2) --- Optimal Approach
// Space Complexity: O(n)

var minimumTotal = function(triangle) {

    let n = triangle.length;

    // Copy the last row
    let dp = [...triangle[n - 1]];

    // Start from second-last row
    for (let i = n - 2; i >= 0; i--) {

        for (let j = 0; j <= i; j++) {

            dp[j] = triangle[i][j] +
                Math.min(dp[j], dp[j + 1]);

        }
    }

    return dp[0];
};






// Time Complexity: O(2^n) --- Brute Force
// Space Complexity: O(n) --- Recursion Stack

var minimumTotal = function(triangle) {

    function solve(row, col) {

        // Reached the last row
        if (row === triangle.length - 1) {
            return triangle[row][col];
        }

        let down = solve(row + 1, col);
        let diagonal = solve(row + 1, col + 1);

        return triangle[row][col] + Math.min(down, diagonal);
    }

    return solve(0, 0);
};