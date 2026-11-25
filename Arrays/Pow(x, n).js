
/*
Time Complexity: O(log N)
Space Complexity: O(1)
*/

var myPow = function(x, n) {
    let power = n;
    let result = 1;

    // Handle negative exponent
    if (power < 0) {
        x = 1 / x;
        power = -power;
    }

    // Binary exponentiation
    while (power > 0) {

        // If exponent is odd, multiply result by x
        if (power % 2 === 1) {
            result *= x;
        }

        // Square x and reduce exponent by half
        x *= x;
        power = Math.floor(power / 2);
    }

    return result;
};




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
