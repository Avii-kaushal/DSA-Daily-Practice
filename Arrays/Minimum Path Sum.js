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