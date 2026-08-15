// Time Complexity: O(n)             
// Space Complexity: O(n)

var lengthOfLastWord = function (s) {
    let words = s.trim().split(" ");

    // Remove empty strings caused by multiple spaces
    words = words.filter(word => word !== "");

    return words[words.length - 1].length;
};