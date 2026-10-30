// Time Complexity: O(1) --- Optimal Approach
// Space Complexity: O(1)

var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};




// Time Complexity: O(log n) --- Brute Force
// Space Complexity: O(1)

var isPowerOfTwo = function(n) {
    if (n <= 0) return false;

    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1;
};