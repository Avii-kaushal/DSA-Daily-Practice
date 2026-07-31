// Time Complexity: O(n²)            
// Space Complexity: O(n²)

var rotate = function (matrix) {
    const n = matrix.length;

    let copy = Array.from({ length: n }, () => Array(n));

    // Fill rotated positions
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            copy[j][n - 1 - i] = matrix[i][j];
        }
    }

    // Copy back to original matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = copy[i][j];
        }
    }
};