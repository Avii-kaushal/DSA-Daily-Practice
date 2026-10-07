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