// Time Complexity: O(m × n)                               ---     Optimal Approach
// Space Complexity: O(m + n)

var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    // Multiply each digit
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let mul = (num1[i] - '0') * (num2[j] - '0');

            let sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    return result.join("");
};





// Time Complexity: O(m × n²)                               ---     Brute Force
// Space Complexity: O(m + n)

var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    // Adds two numeric strings
    function addStrings(a, b) {
        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;
        let result = "";

        while (i >= 0 || j >= 0 || carry) {
            let x = i >= 0 ? a[i--] - '0' : 0;
            let y = j >= 0 ? b[j--] - '0' : 0;

            let sum = x + y + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }

        return result;
    }

    let answer = "";

    // Multiply each digit of num2
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let current = "";

        for (let j = num1.length - 1; j >= 0; j--) {
            let product = (num2[i] - '0') * (num1[j] - '0') + carry;

            current = (product % 10) + current;
            carry = Math.floor(product / 10);
        }

        if (carry) {
            current = carry + current;
        }

        // Append zeros according to place value
        current += "0".repeat(num2.length - 1 - i);

        answer = addStrings(answer, current);
    }

    return answer;
};