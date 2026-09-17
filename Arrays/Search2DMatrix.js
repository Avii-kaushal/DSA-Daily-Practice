// Time Complexity: O(log(m * n))        Binary Search  ---   Optimal Approach
// Space Complexity: O(1)

function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // Convert 1D index to 2D row and column
        let row = Math.floor(mid / n);
        let col = mid % n;

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}




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