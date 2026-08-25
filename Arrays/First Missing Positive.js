// Time Complexity: O(n)                           
// Space Complexity: O(n)

var firstMissingPositive = function (nums) {
    const set = new Set(nums);

    let smallest = 1;

    // Find the first positive number that is missing
    while (set.has(smallest)) {
        smallest++;
    }

    return smallest;
};