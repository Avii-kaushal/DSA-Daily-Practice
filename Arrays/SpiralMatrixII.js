// Time Complexity: O(n²)                  Boundary Traversal  ---  Optimal Approach
// Space Complexity: O(n²)

function generateMatrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let num = 1;

    while (top <= bottom && left <= right) {

        // Left → Right
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;

        // Top → Bottom
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;

        // Right → Left
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = num++;
            }
            bottom--;
        }

        // Bottom → Top
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = num++;
            }
            left++;
        }
    }

    return matrix;
}






// Time Complexity: O(n²)                  Simulation  ---  Brute Force Approach
// Space Complexity: O(n²)

function generateMatrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let directions = [
        [0, 1],   // right
        [1, 0],   // down
        [0, -1],  // left
        [-1, 0]   // up
    ];

    let row = 0;
    let col = 0;
    let direction = 0;

    for (let num = 1; num <= n * n; num++) {
        matrix[row][col] = num;

        let nextRow = row + directions[direction][0];
        let nextCol = col + directions[direction][1];

        // Change direction if outside matrix or already filled
        if (
            nextRow < 0 ||
            nextRow >= n ||
            nextCol < 0 ||
            nextCol >= n ||
            matrix[nextRow][nextCol] !== 0
        ) {
            direction = (direction + 1) % 4;

            nextRow = row + directions[direction][0];
            nextCol = col + directions[direction][1];
        }

        row = nextRow;
        col = nextCol;
    }

    return matrix;
}