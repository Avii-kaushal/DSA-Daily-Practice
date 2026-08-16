// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    let length = 0;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // Count characters of the last word
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
};

// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(n)

var lengthOfLastWord = function (s) {
    let words = s.trim().split(" ");

    // Remove empty strings caused by multiple spaces
    words = words.filter(word => word !== "");

    return words[words.length - 1].length;
};