// Time Complexity: O(n)                                    ---   Optimal Approach
// Space Complexity: O(n)

var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = new Array(numRows).fill('');

    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {

        rows[currentRow] += char;

        if (
            currentRow === 0 ||
            currentRow === numRows - 1
        ) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};




// Time Complexity: O(n²)                                ---     Brute Force
// Space Complexity: O(n²)

var convert = function(s, numRows) {
    if (numRows === 1) return s;

    const n = s.length;
    const cols = n; // maximum possible columns

    const matrix = Array.from(
        { length: numRows },
        () => Array(cols).fill('')
    );

    let row = 0;
    let col = 0;
    let index = 0;

    while (index < n) {

        // Move Down
        while (row < numRows && index < n) {
            matrix[row][col] = s[index++];
            row++;
        }

        row -= 2;
        col++;

        // Move Up Diagonally
        while (row > 0 && index < n) {
            matrix[row][col] = s[index++];
            row--;
            col++;
        }
    }

    let result = '';

    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] !== '') {
                result += matrix[r][c];
            }
        }
    }

    return result;
};