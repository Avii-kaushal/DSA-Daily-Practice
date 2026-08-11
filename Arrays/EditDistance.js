// Time Complexity: O(m × n)                               ---     Optimal Approach
// Space Complexity: O(m × n)

var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;

    // dp[i][j] = minimum operations to convert
    // first i characters of word1 to first j characters of word2
    let dp = Array.from(
        { length: m + 1 },
        () => new Array(n + 1).fill(0)
    );

    // Convert word1[0...i] to empty string
    // Requires deleting all i characters
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    // Convert empty string to word2[0...j]
    // Requires inserting all j characters
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            // Characters are the same
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Replace, Delete, or Insert
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + 1, // Replace
                    dp[i - 1][j] + 1,     // Delete
                    dp[i][j - 1] + 1      // Insert
                );
            }
        }
    }

    return dp[m][n];
};





// Time Complexity: O(m × n)                               ---     Brute Force
// Space Complexity: O(m + n)

var minDistance = function (word1, word2) {
    function solve(i, j) {

        // word1 is completely processed
        if (i === word1.length) {
            return word2.length - j;
        }

        // word2 is completely processed
        if (j === word2.length) {
            return word1.length - i;
        }

        // Characters match
        if (word1[i] === word2[j]) {
            return solve(i + 1, j + 1);
        }

        // Replace
        let replace = solve(i + 1, j + 1);

        // Delete
        let deleteChar = solve(i + 1, j);

        // Insert
        let insert = solve(i, j + 1);

        return 1 + Math.min(
            replace,
            deleteChar,
            insert
        );
    }

    return solve(0, 0);
};