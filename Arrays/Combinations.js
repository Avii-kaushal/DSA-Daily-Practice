// Time Complexity: O(C(n, k) * k)                  ---     Optimal Approach
// Space Complexity: O(k)                           ---     Recursion Stack + Current Combination

var combine = function (n, k) {
    let result = [];
    let current = [];

    function backtrack(start) {

        // We have selected k numbers
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        // Try every possible number
        for (let i = start; i <= n; i++) {
            current.push(i);

            // Move forward so numbers cannot be reused
            backtrack(i + 1);

            // Remove the last number and try another
            current.pop();
        }
    }

    backtrack(1);

    return result;
};