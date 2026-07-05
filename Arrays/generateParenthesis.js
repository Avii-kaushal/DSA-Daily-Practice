// Time Complexity: O(4ⁿ / √n)                               ---     Optimal Approach
// Space Complexity: O(n)

var generateParenthesis = function (n) {
    let result = [];

    function backtrack(current, open, close) {
        // Valid combination is formed
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add an opening parenthesis
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Add a closing parenthesis if valid
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};


// Time Complexity: O(2^(2n) * n)                               ---     Brute Force
// Space Complexity: O(2^(2n) * n)

var generateParenthesis = function (n) {
    let result = [];

    function isValid(str) {
        let balance = 0;

        for (let ch of str) {
            if (ch === "(") balance++;
            else balance--;

            if (balance < 0) return false;
        }

        return balance === 0;
    }

    function generate(current) {
        // All characters are generated
        if (current.length === 2 * n) {
            if (isValid(current)) {
                result.push(current);
            }
            return;
        }

        generate(current + "(");
        generate(current + ")");
    }

    generate("");

    return result;
};