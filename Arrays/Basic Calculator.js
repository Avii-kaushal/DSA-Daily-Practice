// Time Complexity: O(n)
// Space Complexity: O(n)

var calculate = function (s) {
    let result = 0;
    let number = 0;
    let sign = 1;

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Build number
        if (char >= "0" && char <= "9") {
            number = number * 10 + Number(char);
        }

        // Positive sign
        else if (char === "+") {
            result += sign * number;
            number = 0;
            sign = 1;
        }

        // Negative sign
        else if (char === "-") {
            result += sign * number;
            number = 0;
            sign = -1;
        }

        // Opening bracket
        else if (char === "(") {
            // Save current result and sign
            stack.push(result);
            stack.push(sign);

            // Reset for expression inside brackets
            result = 0;
            number = 0;
            sign = 1;
        }

        // Closing bracket
        else if (char === ")") {
            // Complete current number
            result += sign * number;
            number = 0;

            // Get sign before '('
            const previousSign = stack.pop();

            // Get result before '('
            const previousResult = stack.pop();

            result = previousResult + previousSign * result;
        }

        // Ignore spaces
    }

    // Add final number
    result += sign * number;

    return result;
};





// Time Complexity: O(n²) approximately              -------      // Brute Force
// Space Complexity: O(n) for recursion

var calculate = function (s) {

    function solve(str) {
        let result = 0;
        let number = 0;
        let sign = 1;

        for (let i = 0; i < str.length; i++) {
            let ch = str[i];

            // Build number
            if (ch >= "0" && ch <= "9") {
                number = number * 10 + Number(ch);
            }

            // +
            else if (ch === "+") {
                result += sign * number;
                number = 0;
                sign = 1;
            }

            // -
            else if (ch === "-") {
                result += sign * number;
                number = 0;
                sign = -1;
            }

            // (
            else if (ch === "(") {
                let count = 1;
                let j = i + 1;

                // Find matching )
                while (j < str.length && count > 0) {
                    if (str[j] === "(") {
                        count++;
                    } else if (str[j] === ")") {
                        count--;
                    }

                    j++;
                }

                // Extract content inside ()
                let inside = str.substring(i + 1, j - 1);

                // Recursively calculate
                number = solve(inside);

                // Move i to closing )
                i = j - 1;
            }
        }

        // Add last number
        result += sign * number;

        return result;
    }

    return solve(s);
};