// Time Complexity: O(n^2)                      Expand Around Center Approach  ---   Better Approach
// Space Complexity: O(1)

var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }

            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        expand(i, i);

        // Even length palindrome
        expand(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};


// Time Complexity: O(n^3)                      Brute Force Approach
// Space Complexity: O(1)

var longestPalindrome = function(s) {
    let longest = "";

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.substring(i, j + 1);

            if (isPalindrome(substr) && substr.length > longest.length) {
                longest = substr;
            }
        }
    }

    return longest;
};

// Driver Code
let s = "babad";
console.log(longestPalindrome(s));