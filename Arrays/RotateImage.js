// Time Complexity: O(n²)                               ---     Optimal Approach
// Space Complexity: O(1)

var rotate = function (matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};





// Time Complexity: O(n²)                               ---     Brute Force
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