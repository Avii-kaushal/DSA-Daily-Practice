


// Time Complexity: O(2^(n + m))
// Space Complexity: O(n + m)   // recursion stack

// Brute Force Approach (Recursion)

var isMatch = function(s, p) {

    function solve(i, j) {

        // Both string and pattern are completely matched
        if (i === s.length && j === p.length) {
            return true;
        }

        // Pattern is finished but string is not
        if (j === p.length) {
            return false;
        }

        // String is finished
        if (i === s.length) {

            // Remaining pattern must contain only '*'
            for (let k = j; k < p.length; k++) {
                if (p[k] !== '*') {
                    return false;
                }
            }

            return true;
        }

        // Characters match OR '?' matches any character
        if (p[j] === '?' || p[j] === s[i]) {
            return solve(i + 1, j + 1);
        }

        // '*'
        if (p[j] === '*') {

            // Case 1: '*' matches empty
            // Case 2: '*' matches current character
            return (
                solve(i, j + 1) ||
                solve(i + 1, j)
            );
        }

        // Characters don't match
        return false;
    }

    return solve(0, 0);
};


let s = "adceb";
let p = "*a*b";

let result = isMatch(s, p);
console.log(result);