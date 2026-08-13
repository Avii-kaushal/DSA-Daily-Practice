// Time Complexity: O(m + n)                               ---     Optimal Approach
// Space Complexity: O(n)

var minWindow = function (s, t) {
    if (t.length > s.length) {
        return "";
    }

    let count = new Map();

    // Store required frequency of each character
    for (let ch of t) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    let left = 0;
    let right = 0;

    // Number of characters still required
    let required = t.length;

    let minLength = Infinity;
    let start = 0;

    while (right < s.length) {
        let ch = s[right];

        // If this character is required
        if (count.has(ch)) {
            if (count.get(ch) > 0) {
                required--;
            }

            count.set(ch, count.get(ch) - 1);
        }

        right++;

        // Window contains all characters of t
        while (required === 0) {

            // Update minimum window
            if (right - left < minLength) {
                minLength = right - left;
                start = left;
            }

            let leftChar = s[left];

            if (count.has(leftChar)) {
                count.set(
                    leftChar,
                    count.get(leftChar) + 1
                );

                // Character is now missing
                if (count.get(leftChar) > 0) {
                    required++;
                }
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(start, start + minLength);
};



// Time Complexity: O(m × n)                               ---     Brute Force
// Space Complexity: O(n)

var minWindow = function (s, t) {
    let minLength = Infinity;
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        let count = new Map();

        for (let ch of t) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }

        let required = t.length;

        for (let j = i; j < s.length; j++) {
            let ch = s[j];

            if (count.has(ch) && count.get(ch) > 0) {
                count.set(ch, count.get(ch) - 1);
                required--;
            }

            // All characters from t are present
            if (required === 0) {
                if (j - i + 1 < minLength) {
                    minLength = j - i + 1;
                    answer = s.substring(i, j + 1);
                }

                break;
            }
        }
    }

    return answer;
};