// Time Complexity: O(n)                      Hash Map + Sliding Window Approach  ---   Most Optimized
// Space Complexity: O(n)

var lengthOfLongestSubstring = function(s) {
    let map = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }

        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};



// Time Complexity: O(n)                      Sliding Window Approach  ---   Optimal Approach
// Space Complexity: O(n)

var lengthOfLongestSubstring = function(s) {
    let set = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};



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