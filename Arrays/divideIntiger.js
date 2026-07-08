// Time Complexity: O(log² n)                               ---     Optimal Approach
// Space Complexity: O(1)

var divide = function (dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Handle overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine the sign of the result
    let negative = (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let quotient = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        // Double the divisor until it exceeds the dividend
        while (dvd >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }

        dvd -= temp;
        quotient += multiple;
    }

    return negative ? -quotient : quotient;
};



// Time Complexity: O(|dividend / divisor|)                 ---     Brute Force
// Space Complexity: O(1)

var divide = function (dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Handle overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    let negative = (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let quotient = 0;

    // Repeated subtraction
    while (dvd >= dvs) {
        dvd -= dvs;
        quotient++;
    }

    return negative ? -quotient : quotient;
};