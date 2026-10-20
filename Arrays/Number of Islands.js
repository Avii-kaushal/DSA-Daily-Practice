// Time Complexity: O(m * n) --- Optimal BFS Approach
// Space Complexity: O(m * n)

function numIslands(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let islands = 0;

    let directions = [
        [1, 0],  // Down
        [-1, 0], // Up
        [0, 1],  // Right
        [0, -1]  // Left
    ];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === "0") continue;

            islands++;

            let queue = [[r, c]];
            let head = 0;

            grid[r][c] = "0"; // Mark visited immediately

            while (head < queue.length) {
                let [row, col] = queue[head++];

                for (let [dr, dc] of directions) {
                    let nr = row + dr;
                    let nc = col + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] === "1"
                    ) {
                        grid[nr][nc] = "0";
                        queue.push([nr, nc]);
                    }
                }
            }
        }
    }

    return islands;
}



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