
// Time Complexity: O(logn)                                ---     optimized Solution
// Space Complexity: O(1)
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        rev = rev * 10 + digit;

        if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }
    }

    return rev;
};

// Time Complexity: O(logn)                                ---     optimized Solution
// Space Complexity: O(1)
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        let digit = x % 10;

        // Remove last digit
        x = Math.trunc(x / 10);

        rev = rev * 10 + digit;

        // Overflow check
        if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
            return 0;
        }
    }

    return rev;
};

// Time Complexity: O(n)                                ---     Brute Force
// Space Complexity: O(n)
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;

    let reversed = parseInt(
        Math.abs(x).toString().split("").reverse().join("")
    );

    reversed *= sign;

    if (reversed < -(2 ** 31) || reversed > (2 ** 31 - 1)) {
        return 0;
    }

    return reversed;
};