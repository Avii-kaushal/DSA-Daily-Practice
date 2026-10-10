// Time Complexity: O(n * 2^n)                 Backtracking  ---  Optimal Approach
// Space Complexity: O(n * 2^n)

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let subset = [];

    function backtrack(start) {
        result.push([...subset]);

        for (let i = start; i < nums.length; i++) {
            // Skip duplicates at the same recursion level
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            subset.push(nums[i]);

            backtrack(i + 1);

            subset.pop();
        }
    }

    backtrack(0);

    return result;
}




// Time Complexity: O(n * 2^n)                 Bitmask + Set  ---  Brute Force Approach
// Space Complexity: O(n * 2^n)

function subsetsWithDup(nums) {
    let result = [];
    let seen = new Set();
    let n = nums.length;

    for (let mask = 0; mask < (1 << n); mask++) {
        let subset = [];

        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subset.push(nums[i]);
            }
        }

        let key = JSON.stringify(subset);

        if (!seen.has(key)) {
            seen.add(key);
            result.push(subset);
        }
    }

    return result;
}