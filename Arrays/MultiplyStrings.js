// Time Complexity: O(n * m)                               ---     Optimal Approach
// Space Complexity: O(n + m)

var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let n = num1.length;
    let m = num2.length;

    let result = new Array(n + m).fill(0);

    // Multiply each digit
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');

            let p1 = i + j;
            let p2 = i + j + 1;

            let sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    return result.join("");
};



// Time Complexity: O(n * m + n + m)                       ---     Brute Force
// Space Complexity: O(n + m)

var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = "0";

    // Add two numeric strings
    function addStrings(a, b) {
        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;
        let ans = "";

        while (i >= 0 || j >= 0 || carry) {
            let sum = carry;

            if (i >= 0) sum += a[i--] - '0';
            if (j >= 0) sum += b[j--] - '0';

            ans = (sum % 10) + ans;
            carry = Math.floor(sum / 10);
        }

        return ans;
    }

    // Multiply string with a single digit
    function multiplyByDigit(num, digit) {
        let carry = 0;
        let ans = "";

        for (let i = num.length - 1; i >= 0; i--) {
            let product = (num[i] - '0') * digit + carry;
            ans = (product % 10) + ans;
            carry = Math.floor(product / 10);
        }

        if (carry) ans = carry + ans;

        return ans;
    }

    for (let i = num2.length - 1; i >= 0; i--) {
        let digit = num2[i] - '0';

        let partial = multiplyByDigit(num1, digit);

        // Append zeros according to place value
        partial += "0".repeat(num2.length - 1 - i);

        result = addStrings(result, partial);
    }

    return result;
};