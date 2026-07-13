// Time Complexity: O(n + m)                               ---     Optimal Approach
// Space Complexity: O(1)

var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};



// Time Complexity: O((n - m + 1) * m)                     ---     Brute Force
// Space Complexity: O(1)

var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    // Check every possible starting position
    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === m) {
            return i;
        }
    }

    return -1;
};