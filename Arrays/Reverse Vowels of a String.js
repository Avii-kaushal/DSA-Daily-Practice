// Time Complexity: O(n) --- Optimal Approach
// Space Complexity: O(n) for the character array

var reverseVowels = function(s) {
    let arr = s.split("");
    let left = 0;
    let right = arr.length - 1;

    const vowels = "aeiouAEIOU";

    while (left < right) {

        // Find vowel from left
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }

        // Find vowel from right
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // Swap vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
};



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