// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var canJump = function (nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {

        // Current index is unreachable
        if (i > maxReach) {
            return false;
        }

        // Update the farthest reachable index
        maxReach = Math.max(maxReach, i + nums[i]);

        // Already reached or crossed the last index
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true;
};




// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(n)

var canJump = function (nums) {
    const n = nums.length;

    let dp = new Array(n).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        if (!dp[i]) continue;

        for (let j = 1; j <= nums[i] && i + j < n; j++) {
            dp[i + j] = true;
        }
    }

    return dp[n - 1];
};