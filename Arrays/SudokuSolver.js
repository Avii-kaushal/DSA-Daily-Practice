// Time Complexity: O(9^m)            
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