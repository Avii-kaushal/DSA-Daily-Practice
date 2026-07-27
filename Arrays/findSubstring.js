// Time Complexity: O(n * wordLength)                               ---     Optimal Approach
// Space Complexity: O(m)

var findSubstring = function (s, words) {
    if (s.length === 0 || words.length === 0) return [];

    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;

    let target = new Map();

    for (let word of words) {
        target.set(word, (target.get(word) || 0) + 1);
    }

    let result = [];

    // Check each possible offset
    for (let offset = 0; offset < wordLength; offset++) {
        let left = offset;
        let count = 0;
        let window = new Map();

        for (let right = offset; right + wordLength <= s.length; right += wordLength) {
            let word = s.substring(right, right + wordLength);

            if (target.has(word)) {
                window.set(word, (window.get(word) || 0) + 1);
                count++;

                while (window.get(word) > target.get(word)) {
                    let leftWord = s.substring(left, left + wordLength);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }

                if (count === wordCount) {
                    result.push(left);

                    let leftWord = s.substring(left, left + wordLength);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLength;
                    count--;
                }
            } else {
                window.clear();
                count = 0;
                left = right + wordLength;
            }
        }
    }

    return result;
};





// Time Complexity: O((n - k + 1) × m × L)                               ---     Brute Force
// Space Complexity: O(m)

var findSubstring = function (s, words) {
    if (s.length === 0 || words.length === 0) return [];

    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;

    let target = new Map();

    for (let word of words) {
        target.set(word, (target.get(word) || 0) + 1);
    }

    let result = [];

    for (let i = 0; i + totalLength <= s.length; i++) {
        let seen = new Map();
        let j = 0;

        while (j < wordCount) {
            let start = i + j * wordLength;
            let word = s.substring(start, start + wordLength);

            if (!target.has(word)) break;

            seen.set(word, (seen.get(word) || 0) + 1);

            if (seen.get(word) > target.get(word)) break;

            j++;
        }

        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
};