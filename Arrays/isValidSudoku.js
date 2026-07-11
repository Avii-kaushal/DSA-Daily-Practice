// Time Complexity: O(1)   
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