// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

function isAlphaNumeric(ch) {
    return (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    );
}



// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(n)

var isPalindrome = function (s) {

    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = "";

    for (let ch of s) {
        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        ) {
            cleaned += ch.toLowerCase();
        }
    }

    // Check palindrome
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};