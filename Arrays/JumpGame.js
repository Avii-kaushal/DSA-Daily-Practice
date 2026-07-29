// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var jump = function (nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        // End of current jump range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};






// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(n)

var jump = function (nums) {
    const n = nums.length;
    let dp = new Array(n).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= nums[i] && i + j < n; j++) {
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }

    return dp[n - 1];
};