// Time Complexity: O(n^3)                      Brute Force Approach
// Space Complexity: O(1)

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    function hasDuplicate(str) {
        let set = new Set();

        for (let ch of str) {
            if (set.has(ch)) {
                return true;
            }
            set.add(ch);
        }

        return false;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.substring(i, j + 1);

            if (!hasDuplicate(substr)) {
                maxLength = Math.max(maxLength, substr.length);
            }
        }
    }

    return maxLength;
};

// Driver Code
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));