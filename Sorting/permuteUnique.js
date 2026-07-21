// Time Complexity: O(n × n!)                               ---     Optimal Approach
// Space Complexity: O(n)

var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);

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

            // Skip already used elements
            if (used[i]) continue;

            // Skip duplicate elements
            if (
                i > 0 &&
                nums[i] === nums[i - 1] &&
                !used[i - 1]
            ) {
                continue;
            }

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



// Time Complexity: O(n! × n log n)                         ---     Brute Force
// Space Complexity: O(n! × n)

var permuteUnique = function (nums) {
    let result = [];
    let used = new Array(nums.length).fill(false);
    let current = [];
    let unique = new Set();

    function backtrack() {

        if (current.length === nums.length) {
            let key = current.join(",");

            if (!unique.has(key)) {
                unique.add(key);
                result.push([...current]);
            }

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

    // Generate all permutations
    nums.sort((a, b) => a - b);
    backtrack();

    return result;
};