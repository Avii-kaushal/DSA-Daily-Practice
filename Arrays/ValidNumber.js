// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var isNumber = function (s) {
    let seenDigit = false;
    let seenDot = false;
    let seenExponent = false;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            seenDigit = true;
        }

        else if (ch === '+' || ch === '-') {
            // Sign is valid only at the beginning or immediately after e/E
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        }

        else if (ch === '.') {
            // Dot cannot appear after exponent or more than once
            if (seenDot || seenExponent) {
                return false;
            }
            seenDot = true;
        }

        else if (ch === 'e' || ch === 'E') {
            // Exponent cannot appear twice and must follow a digit
            if (seenExponent || !seenDigit) {
                return false;
            }

            seenExponent = true;
            seenDigit = false; // Need at least one digit after exponent
        }

        else {
            return false;
        }
    }

    return seenDigit;
};



// Time Complexity: O(n)                               ---     Brute Force (Regex)
// Space Complexity: O(1)

var isNumber = function (s) {
    const pattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    return pattern.test(s);
};