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