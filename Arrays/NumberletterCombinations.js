// Time Complexity: O(4^n × n)                          ---     Iterative (BFS)
// Space Complexity: O(4^n)

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };

    let result = [""];

    for (let digit of digits) {
        const temp = [];

        for (let combination of result) {
            for (let ch of map[digit]) {
                temp.push(combination + ch);
            }
        }

        result = temp;
    }

    return result;
};