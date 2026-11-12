// Time Complexity: O(m * n)
// Space Complexity: O(m * n) + O(m + n) recursion stack

var isInterleave = function(s1, s2, s3) {

    let m = s1.length;
    let n = s2.length;

    if (m + n !== s3.length) return false;

    let memo = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(-1)
    );

    function solve(i, j) {

        if (i === m && j === n) {
            return true;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        let k = i + j;
        let result = false;

        if (i < m && s1[i] === s3[k]) {
            result = solve(i + 1, j);
        }

        if (!result && j < n && s2[j] === s3[k]) {
            result = solve(i, j + 1);
        }

        memo[i][j] = result;
        return result;
    }

    return solve(0, 0);
};



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