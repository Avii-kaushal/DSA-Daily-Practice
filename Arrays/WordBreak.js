// Time Complexity: O(n² × m)                         ---     Optimal Approach
// Space Complexity: O(n)

var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);

    let dp = new Array(s.length + 1).fill(false);

    // Empty string can be segmented
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {

        for (let j = 0; j < i; j++) {

            // Previous part is valid
            // Current substring exists in dictionary
            if (
                dp[j] &&
                wordSet.has(s.substring(j, i))
            ) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};




// Time Complexity: O(2^n)                         ---     Brute Force
// Space Complexity: O(n)

var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);

    function solve(start) {

        // Reached the end successfully
        if (start === s.length) {
            return true;
        }

        // Try every possible substring
        for (let end = start + 1; end <= s.length; end++) {

            let word = s.substring(start, end);

            if (
                wordSet.has(word) &&
                solve(end)
            ) {
                return true;
            }
        }

        return false;
    }

    return solve(0);
};