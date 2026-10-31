// Time Complexity: O(n) --- Brute Force
// Space Complexity: O(n)

var reverseVowels = function(s) {
    let vowels = [];
    let arr = s.split("");

    // Collect all vowels
    for (let char of arr) {
        if ("aeiouAEIOU".includes(char)) {
            vowels.push(char);
        }
    }

    // Replace vowels in reverse order
    for (let i = 0; i < arr.length; i++) {
        if ("aeiouAEIOU".includes(arr[i])) {
            arr[i] = vowels.pop();
        }
    }

    return arr.join("");
};