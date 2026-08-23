// Time Complexity: O(n log n * k)                     ---     Optimal Approach
// Space Complexity: O(n * k)

var largestNumber = function (nums) {

    // Convert all numbers to strings
    const result = nums.map(String);

    // Sort based on which combination creates a larger number
    result.sort((a, b) => {
        return (b + a).localeCompare(a + b);
    });

    // Handle cases like [0, 0]
    if (result[0] === "0") {
        return "0";
    }

    return result.join("");
};