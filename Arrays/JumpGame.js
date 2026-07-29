// Time Complexity: O(n²)                      
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