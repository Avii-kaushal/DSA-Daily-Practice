// Time Complexity: O(n²)                   
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