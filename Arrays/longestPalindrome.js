// Time Complexity: O(n)                     
// Space Complexity: O(n)

var longestPalindrome = function (s) {
    let map = new Map();

    // Count frequency of each character
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (let count of map.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length += 1;
    }

    return length;
};