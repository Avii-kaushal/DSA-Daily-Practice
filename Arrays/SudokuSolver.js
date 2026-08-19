// Time Complexity: O(9^m)                         ---     Optimal Approach
// Space Complexity: O(m) + O(1)

var solveSudoku = function (board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    // Store existing numbers
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let value = board[row][col];

            if (value !== ".") {
                rows[row].add(value);
                cols[col].add(value);

                let box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                boxes[box].add(value);
            }
        }
    }

    function backtrack() {

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                // Skip already filled cells
                if (board[row][col] !== ".") {
                    continue;
                }

                let box =
                    Math.floor(row / 3) * 3 +
                    Math.floor(col / 3);

                // Try numbers 1 to 9
                for (let num = 1; num <= 9; num++) {
                    let value = String(num);

                    // Check row, column and box
                    if (
                        rows[row].has(value) ||
                        cols[col].has(value) ||
                        boxes[box].has(value)
                    ) {
                        continue;
                    }

                    // Place number
                    board[row][col] = value;
                    rows[row].add(value);
                    cols[col].add(value);
                    boxes[box].add(value);

                    // Continue solving
                    if (backtrack()) {
                        return true;
                    }

                    // Backtrack
                    board[row][col] = ".";
                    rows[row].delete(value);
                    cols[col].delete(value);
                    boxes[box].delete(value);
                }

                // No number works here
                return false;
            }
        }

        // No empty cells remaining
        return true;
    }

    backtrack();
};





// Time Complexity: O(9^m)                         ---     Brute Force
// Space Complexity: O(m)

var solveSudoku = function (board) {

    function isValid(row, col, value) {

        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === value) {
                return false;
            }
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === value) {
                return false;
            }
        }

        // Check 3 x 3 box
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === value) {
                    return false;
                }
            }
        }

        return true;
    }

    function backtrack() {

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] !== ".") {
                    continue;
                }

                // Try 1 to 9
                for (let num = 1; num <= 9; num++) {
                    let value = String(num);

                    if (isValid(row, col, value)) {

                        // Choose
                        board[row][col] = value;

                        // Explore
                        if (backtrack()) {
                            return true;
                        }

                        // Undo
                        board[row][col] = ".";
                    }
                }

                // No number can be placed
                return false;
            }
        }

        return true;
    }

    backtrack();
};