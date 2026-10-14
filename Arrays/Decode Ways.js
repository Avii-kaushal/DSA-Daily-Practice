// Time Complexity: O(n)                      Dynamic Programming  ---  Optimal Approach
// Space Complexity: O(n)

function numDecodings(s) {
    let n = s.length;
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {

        // One-digit decoding
        if (s[i - 1] !== "0") {
            dp[i] += dp[i - 1];
        }

        // Two-digit decoding
        if (i >= 2) {
            let num = Number(s.substring(i - 2, i));

            if (num >= 10 && num <= 26) {
                dp[i] += dp[i - 2];
            }
        }
    }

    return dp[n];
}



// Time Complexity: O(2^n)                      Recursion  ---  Brute Force Approach
// Space Complexity: O(n)

function numDecodings(s) {
    function solve(i) {
        if (i === s.length) return 1;

        if (s[i] === "0") return 0;

        // Decode one digit
        let ways = solve(i + 1);

        // Decode two digits if between 10 and 26
        if (i + 1 < s.length) {
            let num = Number(s.substring(i, i + 2));

            if (num >= 10 && num <= 26) {
                ways += solve(i + 2);
            }
        }

        return ways;
    }

    return solve(0);
}