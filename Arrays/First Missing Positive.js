// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var firstMissingPositive = function (nums) {
    const n = nums.length;

    // Place every number at its correct index
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            const correctIndex = nums[i] - 1;

            // Swap nums[i] with its correct position
            [nums[i], nums[correctIndex]] = 
                [nums[correctIndex], nums[i]];
        }
    }

    // Find the first incorrect position
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // All numbers from 1 to n exist
    return n + 1;
};


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