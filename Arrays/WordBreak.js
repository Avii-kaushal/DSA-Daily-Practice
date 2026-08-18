// Time Complexity: O(2^n)                  
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