
/*
Time Complexity: O(log N)
Space Complexity: O(1)
*/

var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        // Find middle value
        const mid = Math.floor(left + (right - left) / 2);

        // Calculate square
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            // Search right half
            left = mid + 1;
        } else {
            // Search left half
            right = mid - 1;
        }
    }

    // Right is the floor of square root
    return right;
};



/*
Time Complexity: O(√N)
Space Complexity: O(1)
*/

var mySqrt = function(x) {
    let result = 0;

    // Find the largest integer whose square is <= x
    for (let i = 1; i <= x; i++) {
        if (i * i <= x) {
            result = i;
        } else {
            break;
        }
    }

    return result;
};
