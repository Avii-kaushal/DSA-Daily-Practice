// Time Complexity: O(m * n)              Boundary Approach  ---   Optimal Approach
// Space Complexity: O(1) excluding output

function spiralOrder(matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        // 1. Traverse from Left → Right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }

        top++;

        // 2. Traverse from Top → Bottom
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }

        right--;

        // 3. Traverse from Right → Left
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }

            bottom--;
        }

        // 4. Traverse from Bottom → Top
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }

            left++;
        }
    }

    return result;
}



// Time Complexity: O(m * n)              Visited Matrix Approach  ---   Brute Force Approach
// Space Complexity: O(m * n)

function spiralOrder(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let visited = Array.from({ length: m }, () => Array(n).fill(false));

    let result = [];

    // Directions: Right → Down → Left → Up
    let directions = [
        [0, 1],   // Right
        [1, 0],   // Down
        [0, -1],  // Left
        [-1, 0]   // Up
    ];

    let row = 0;
    let col = 0;
    let direction = 0;

    for (let i = 0; i < m * n; i++) {

        // Add current element
        result.push(matrix[row][col]);

        // Mark current cell as visited
        visited[row][col] = true;

        // Calculate next position
        let nextRow = row + directions[direction][0];
        let nextCol = col + directions[direction][1];

        // If next position is invalid or already visited,
        // change direction
        if (
            nextRow < 0 ||
            nextRow >= m ||
            nextCol < 0 ||
            nextCol >= n ||
            visited[nextRow][nextCol]
        ) {
            direction = (direction + 1) % 4;

            nextRow = row + directions[direction][0];
            nextCol = col + directions[direction][1];
        }

        // Move to next position
        row = nextRow;
        col = nextCol;
    }

    return result;
}


// Driver Code
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix));

// Output:
// [1, 2, 3, 6, 9, 8, 7, 4, 5]