// Time Complexity: O(m × n)                 First Row & Column Markers  ---   Optimal Approach
// Space Complexity: O(1)

function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Check first row
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
        }
    }

    // Check first column
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
        }
    }

    // Mark rows and columns
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {

            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set marked rows to 0
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set marked columns to 0
    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set first row to 0
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Set first column to 0
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}




// Time Complexity: O(m × n)                 Row & Column Array Approach  ---   Better Approach
// Space Complexity: O(m + n)

function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let zeroRows = new Array(rows).fill(false);
    let zeroCols = new Array(cols).fill(false);

    // Find rows and columns containing 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    // Set rows to 0
    for (let i = 0; i < rows; i++) {
        if (zeroRows[i]) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set columns to 0
    for (let j = 0; j < cols; j++) {
        if (zeroCols[j]) {
            for (let i = 0; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }
}





// Time Complexity: O(m × n × (m + n))       Brute Force Approach
// Space Complexity: O(m × n)

function setZeroes(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = matrix.map(row => [...row]);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (matrix[i][j] === 0) {

                // Set entire row to 0
                for (let k = 0; k < cols; k++) {
                    result[i][k] = 0;
                }

                // Set entire column to 0
                for (let k = 0; k < rows; k++) {
                    result[k][j] = 0;
                }
            }
        }
    }

    // Copy result back
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = result[i][j];
        }
    }
}