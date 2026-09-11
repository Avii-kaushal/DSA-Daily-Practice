// Time Complexity: O(n)
// Space Complexity: O(n)                 Optimal Approach

function climbStairs(n) {
    let dp = new Array(n + 1);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}




// Time Complexity: O(2^n)
// Space Complexity: O(n)                 Brute Force Approach

function climbStairs(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
}

// Driver Code
let n = 3;

console.log(climbStairs(n));
// 3