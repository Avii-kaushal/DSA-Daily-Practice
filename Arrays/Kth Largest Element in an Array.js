// Time Complexity: O(N log N) --- Brute Force Approach
// Space Complexity: O(N) --- Sorting implementation dependent

var findKthLargest = function(nums, k) {

    // Sort array in descending order
    nums.sort((a, b) => b - a);

    // Return kth largest element
    return nums[k - 1];
};