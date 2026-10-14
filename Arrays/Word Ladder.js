// Time Complexity: O(N² * L) --- Brute Force Approach
// Space Complexity: O(N)

// N = number of words, L = length of each word

function ladderLength(beginWord, endWord, wordList) {
    let queue = [[beginWord, 1]];
    let visited = new Set([beginWord]);

    while (queue.length > 0) {
        let [word, steps] = queue.shift();

        if (word === endWord) return steps;

        for (let nextWord of wordList) {
            if (visited.has(nextWord)) continue;

            let diff = 0;

            for (let i = 0; i < word.length; i++) {
                if (word[i] !== nextWord[i]) diff++;
            }

            if (diff === 1) {
                visited.add(nextWord);
                queue.push([nextWord, steps + 1]);
            }
        }
    }

    return 0;
}