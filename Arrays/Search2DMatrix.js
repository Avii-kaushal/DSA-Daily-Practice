// Time Complexity: O(m * n)              Linear Search  ---   Brute Force Approach
// Space Complexity: O(1)

function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {

            if (matrix[row][col] === target) {
                return true;
            }
        }
    }

    return false;
}


// Driver Code
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];

let target = 3;

console.log(searchMatrix(matrix, target));

// Output:
// true