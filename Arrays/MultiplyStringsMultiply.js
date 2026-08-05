// Time Complexity: O(m × n²)         
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