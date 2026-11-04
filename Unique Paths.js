// Time Complexity: O(2^(m+n)) --- Brute Force
// Space Complexity: O(m+n) --- Recursion Stack

var uniquePaths = function(m, n) {

    function solve(i, j) {

        // Destination reached
        if (i === m - 1 && j === n - 1) {
            return 1;
        }

        // Out of grid
        if (i >= m || j >= n) {
            return 0;
        }

        let right = solve(i, j + 1);
        let down = solve(i + 1, j);

        return right + down;
    }

    return solve(0, 0);
};