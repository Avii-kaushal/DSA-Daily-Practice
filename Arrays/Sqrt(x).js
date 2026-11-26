
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
