// Time Complexity: O(m × n)                  
// Space Complexity: O(m + n)

var minDistance = function (word1, word2) {
    function solve(i, j) {

        // word1 is completely processed
        if (i === word1.length) {
            return word2.length - j;
        }

        // word2 is completely processed
        if (j === word2.length) {
            return word1.length - i;
        }

        // Characters match
        if (word1[i] === word2[j]) {
            return solve(i + 1, j + 1);
        }

        // Replace
        let replace = solve(i + 1, j + 1);

        // Delete
        let deleteChar = solve(i + 1, j);

        // Insert
        let insert = solve(i, j + 1);

        return 1 + Math.min(
            replace,
            deleteChar,
            insert
        );
    }

    return solve(0, 0);
};