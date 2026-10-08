// Time Complexity: O(rows * cols)       Histogram + Monotonic Stack --- Optimal Approach
// Space Complexity: O(cols)

function maximalRectangle(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let r = 0; r < rows; r++) {

        // Step 1: Build histogram heights for this row
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === "1") {
                heights[c]++;
            } else {
                heights[c] = 0;
            }
        }

        // Step 2: Find largest rectangle in the histogram
        let stack = [];

        for (let c = 0; c <= cols; c++) {
            let currentHeight = c === cols ? 0 : heights[c];

            while (
                stack.length > 0 &&
                heights[stack[stack.length - 1]] > currentHeight
            ) {
                let height = heights[stack.pop()];

                let width = stack.length === 0
                    ? c
                    : c - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(c);
        }
    }

    return maxArea;
}




// Time Complexity: O(rows² * cols² * rows * cols)  --- Brute Force Approach
// Space Complexity: O(1)

function maximalRectangle(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let maxArea = 0;

    for (let r1 = 0; r1 < rows; r1++) {
        for (let c1 = 0; c1 < cols; c1++) {
            for (let r2 = r1; r2 < rows; r2++) {
                for (let c2 = c1; c2 < cols; c2++) {
                    let valid = true;

                    for (let r = r1; r <= r2 && valid; r++) {
                        for (let c = c1; c <= c2; c++) {
                            if (matrix[r][c] === "0") {
                                valid = false;
                                break;
                            }
                        }
                    }

                    if (valid) {
                        let area = (r2 - r1 + 1) * (c2 - c1 + 1);
                        maxArea = Math.max(maxArea, area);
                    }
                }
            }
        }
    }

    return maxArea;
}