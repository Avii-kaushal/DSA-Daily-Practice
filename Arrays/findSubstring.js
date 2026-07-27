// Time Complexity: O((n - k + 1) × m × L)    
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