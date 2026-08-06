// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var longestPalindrome = function (s) {
    let set = new Set();
    let length = 0;

    for (let ch of s) {
        if (set.has(ch)) {
            set.delete(ch);
            length += 2;
        } else {
            set.add(ch);
        }
    }

    // One odd character can be placed in the center
    if (set.size > 0) {
        length += 1;
    }

    return length;
};


// Time Complexity: O(n)                               ---     Brute Force
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