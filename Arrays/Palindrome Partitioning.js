// Time Complexity: O(n * 2^n)                         ---     Optimal Approach
// Space Complexity: O(n)

var partition = function (s) {
    const result = [];
    const current = [];

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

    function backtrack(start) {

        // Reached the end of the string
        if (start === s.length) {
            result.push([...current]);
            return;
        }

        // Try every possible substring
        for (let end = start; end < s.length; end++) {
            const substring = s.slice(start, end + 1);

            // Only choose palindrome substrings
            if (isPalindrome(substring)) {
                current.push(substring);

                // Move to the next part
                backtrack(end + 1);

                // Backtrack
                current.pop();
            }
        }
    }

    backtrack(0);

    return result;
};