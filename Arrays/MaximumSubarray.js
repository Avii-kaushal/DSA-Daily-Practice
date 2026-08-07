// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var maxSubArray = function (nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // Either extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};



// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(1)

var maxSubArray = function (nums) {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};