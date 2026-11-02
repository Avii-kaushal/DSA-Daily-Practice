// Time Complexity: O(n) --- Brute Force
// Space Complexity: O(1)

var findMin = function(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
};