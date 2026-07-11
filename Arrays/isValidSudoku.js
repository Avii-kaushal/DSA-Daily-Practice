// Time Complexity: O(1)                               ---     Optimal Approach
// Space Complexity: O(1)

var isValidSudoku = function (board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = board[i][j];

            // Skip empty cells
            if (value === ".") continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check for duplicates
            if (
                rows[i].has(value) ||
                cols[j].has(value) ||
                boxes[boxIndex].has(value)
            ) {
                return false;
            }

            rows[i].add(value);
            cols[j].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;
};



// Time Complexity: O(1)                               ---     Brute Force
// Space Complexity: O(1)

var isValidSudoku = function (board) {

    // Check every row
    for (let i = 0; i < 9; i++) {
        let seen = new Set();

        for (let j = 0; j < 9; j++) {
            let value = board[i][j];

            if (value === ".") continue;

            if (seen.has(value)) return false;

            seen.add(value);
        }
    }

    // Check every column
    for (let j = 0; j < 9; j++) {
        let seen = new Set();

        for (let i = 0; i < 9; i++) {
            let value = board[i][j];

            if (value === ".") continue;

            if (seen.has(value)) return false;

            seen.add(value);
        }
    }

    // Check every 3 × 3 box
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let seen = new Set();

            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    let value = board[i][j];

                    if (value === ".") continue;

                    if (seen.has(value)) return false;

                    seen.add(value);
                }
            }
        }
    }

    return true;
};