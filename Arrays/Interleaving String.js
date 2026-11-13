// Time Complexity: O(2^(m+n)) --- Brute Force
// Space Complexity: O(m+n) --- Recursion Stack

var isInterleave = function(s1, s2, s3) {

    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    function solve(i, j, k) {

        // All characters matched
        if (k === s3.length) {
            return true;
        }

        let first = false;
        let second = false;

        // Match character from s1
        if (i < s1.length && s1[i] === s3[k]) {
            first = solve(i + 1, j, k + 1);
        }

        // Match character from s2
        if (j < s2.length && s2[j] === s3[k]) {
            second = solve(i, j + 1, k + 1);
        }

        return first || second;
    }

    return solve(0, 0, 0);
};