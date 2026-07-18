// Time Complexity: O(m × n)                               ---     Optimal Approach
// Space Complexity: O(m × n)

var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;

    const dp = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(false)
    );

    dp[0][0] = true;

    // Handle patterns like a*, a*b*, a*b*c*
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }

            else if (p[j - 1] === "*") {
                // Zero occurrence
                dp[i][j] = dp[i][j - 2];

                // One or more occurrences
                if (
                    p[j - 2] === "." ||
                    p[j - 2] === s[i - 1]
                ) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};



// Time Complexity: Exponential (O(2^(m+n)))              ---     Brute Force
// Space Complexity: O(m + n)

var isMatch = function (s, p) {

    function dfs(i, j) {

        // Pattern finished
        if (j === p.length) {
            return i === s.length;
        }

        let firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === ".");

        // Next character is '*'
        if (j + 1 < p.length && p[j + 1] === "*") {
            return (
                dfs(i, j + 2) || // Skip x*
                (firstMatch && dfs(i + 1, j)) // Use x*
            );
        }

        return firstMatch && dfs(i + 1, j + 1);
    }

    return dfs(0, 0);
};