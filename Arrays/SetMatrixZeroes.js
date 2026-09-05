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