// Time Complexity: O(m * n * 4^L)                     ---     Optimal Approach
// Space Complexity: O(L)

var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {

        // All characters found
        if (index === word.length) {
            return true;
        }

        // Out of bounds or character doesn't match
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Store current character and mark as visited
        const temp = board[row][col];
        board[row][col] = "#";

        // Check all 4 directions
        const found =
            dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1);

        // Backtrack: restore the cell
        board[row][col] = temp;

        return found;
    }

    // Try starting from every cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};




// Time Complexity: O(m * n * 4^L)                     ---     Brute Force
// Space Complexity: O(m * n + L)

var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index, visited) {

        // Entire word found
        if (index === word.length) {
            return true;
        }

        const key = `${row},${col}`;

        // Invalid position, wrong character, or already visited
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index] ||
            visited.has(key)
        ) {
            return false;
        }

        // Mark current cell as visited
        visited.add(key);

        // Search in all 4 directions
        const found =
            dfs(row + 1, col, index + 1, visited) ||
            dfs(row - 1, col, index + 1, visited) ||
            dfs(row, col + 1, index + 1, visited) ||
            dfs(row, col - 1, index + 1, visited);

        // Backtracking
        visited.delete(key);

        return found;
    }

    // Start DFS from every cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            const visited = new Set();

            if (dfs(row, col, 0, visited)) {
                return true;
            }
        }
    }

    return false;
};