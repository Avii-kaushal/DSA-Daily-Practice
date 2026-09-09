// Time Complexity: O(n)
// Space Complexity: O(n)                 Brute Force Approach

function reverseWords(s) {
    let words = s.trim().split(/\s+/);

    let result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }

    return result.join(" ");
}

// Driver Code
let s = "a good   example";

console.log(reverseWords(s));
// "example good a"