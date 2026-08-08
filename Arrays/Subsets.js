// Time Complexity: O(n × 2^n)                               ---     Optimal Approach
// Space Complexity: O(n)

var subsets = function (nums) {
    let result = [];
    let current = [];

    function backtrack(start) {
        // Every current combination is a valid subset
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            // Choose
            current.push(nums[i]);

            // Explore
            backtrack(i + 1);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0);

    return result;
};



// Time Complexity: O(n × 2^n)                               ---     Brute Force
// Space Complexity: O(2^n)

var subsets = function (nums) {
    let result = [[]];

    for (let num of nums) {
        let newSubsets = [];

        // Add current number to every existing subset
        for (let subset of result) {
            newSubsets.push([...subset, num]);
        }

        result.push(...newSubsets);
    }

    return result;
};