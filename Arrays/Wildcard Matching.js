// Time Complexity: O(n + m)
// Space Complexity: O(1)   // excluding input

// Optimized Approach (Greedy)

var isMatch = function(s, p) {
    let i = 0;
    let j = 0;

    let star = -1;
    let match = 0;

    while (i < s.length) {

        // Characters match OR '?' matches any character
        if (
            j < p.length &&
            (p[j] === s[i] || p[j] === '?')
        ) {
            i++;
            j++;
        }

        // Found '*'
        else if (j < p.length && p[j] === '*') {
            star = j;
            match = i;

            // Initially '*' matches empty sequence
            j++;
        }

        // Mismatch, but we have seen '*'
        else if (star !== -1) {
            // Go back to the character after '*'
            j = star + 1;

            // Let '*' match one more character
            match++;
            i = match;
        }

        // Mismatch and no '*' available
        else {
            return false;
        }
    }

    // Remaining pattern should contain only '*'
    while (j < p.length) {
        if (p[j] !== '*') {
            return false;
        }

        j++;
    }

    return true;
};




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