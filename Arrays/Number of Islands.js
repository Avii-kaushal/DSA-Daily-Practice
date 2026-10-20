// Time Complexity: O(m * n) --- Brute Force DFS
// Space Complexity: O(m * n)

function numIslands(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
        if (
            r < 0 || c < 0 ||
            r >= m || c >= n ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0"; // Mark as visited

        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === "1") {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands;
}