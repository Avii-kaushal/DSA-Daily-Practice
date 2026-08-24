// Time Complexity: O(n²)                        
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