// Time Complexity: O(n)              Using Extra String
// Space Complexity: O(n)

function myAtoi(s) {
    let i = 0;
    let n = s.length;

    // Skip leading spaces
    while (i < n && s[i] === " ") {
        i++;
    }

    // Check sign
    let sign = 1;
    if (i < n && (s[i] === "+" || s[i] === "-")) {
        if (s[i] === "-") sign = -1;
        i++;
    }

    // Store digits
    let digits = "";

    while (i < n && s[i] >= "0" && s[i] <= "9") {
        digits += s[i];
        i++;
    }

    if (digits.length === 0)
        return 0;

    let num = Number(digits) * sign;

    // Clamp to 32-bit signed integer range
    if (num > 2147483647)
        return 2147483647;

    if (num < -2147483648)
        return -2147483648;

    return num;
}

// Driver Code
let s = "1337c0d3";

console.log(myAtoi(s));