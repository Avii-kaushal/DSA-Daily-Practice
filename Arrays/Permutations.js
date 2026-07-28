// Time Complexity: O(n × n!)                               ---     Optimal Approach
// Space Complexity: O(n)

var permute = function (nums) {
    let result = [];
    let current = [];
    let used = new Array(nums.length).fill(false);

    function backtrack() {
        // A complete permutation is formed
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.push(nums[i]);

            backtrack();

            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};




// Time Complexity: O(n × n!)                               ---     Brute Force
// Space Complexity: O(n × n!)

var permute = function (nums) {
    let result = [];

    function generate(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Swap
            [nums[start], nums[i]] = [nums[i], nums[start]];

            generate(start + 1);

            // Backtrack
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    generate(0);

    return result;
};