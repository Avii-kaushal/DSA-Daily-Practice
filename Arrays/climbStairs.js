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