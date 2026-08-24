// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(n)

var shortestPalindrome = function (s) {

    const reversed = s.split("").reverse().join("");

    // Separator prevents matching across both strings incorrectly
    const combined = s + "#" + reversed;

    const lps = new Array(combined.length).fill(0);

    // Build LPS array
    for (let i = 1; i < combined.length; i++) {
        let j = lps[i - 1];

        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }

        if (combined[i] === combined[j]) {
            j++;
        }

        lps[i] = j;
    }

    // Length of longest palindromic prefix
    const palindromeLength = lps[combined.length - 1];

    // Characters that need to be added in front
    const remaining = s.slice(palindromeLength);

    return remaining.split("").reverse().join("") + s;
};



// Time Complexity: O(n²)                              ---     Brute Force
// Space Complexity: O(n)

var shortestPalindrome = function (s) {

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

    // Find the longest palindromic prefix
    for (let i = s.length; i >= 0; i--) {
        const prefix = s.slice(0, i);

        if (isPalindrome(prefix)) {
            const remaining = s.slice(i);

            return remaining.split("").reverse().join("") + s;
        }
    }

    return s;
};