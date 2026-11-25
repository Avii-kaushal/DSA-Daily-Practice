
/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

var myPow = function(x, n) {
    let result = 1;
    let power = Math.abs(n);

    // Multiply x repeatedly
    for (let i = 0; i < power; i++) {
        result *= x;
    }

    // Handle negative exponent
    if (n < 0) {
        result = 1 / result;
    }

    return result;
};
