// Time Complexity: O(2^n)                               ---     Optimal Approach
// Space Complexity: O(n)

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];

    function backtrack(start, current, sum) {
        // Target achieved
        if (sum === target) {
            result.push([...current]);
            return;
        }

        // Exceeded target
        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicate elements
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            current.push(candidates[i]);

            // Move to next index (each number used only once)
            backtrack(i + 1, current, sum + candidates[i]);

            current.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
};


// Time Complexity: O(2^n * n log n)                     ---     Brute Force
// Space Complexity: O(2^n)

var combinationSum2 = function (candidates, target) {
    let result = [];
    let unique = new Set();

    function generate(index, current, sum) {

        if (sum === target) {
            let sorted = [...current].sort((a, b) => a - b);
            let key = sorted.join(",");

            if (!unique.has(key)) {
                unique.add(key);
                result.push(sorted);
            }

            return;
        }

        if (index === candidates.length || sum > target) {
            return;
        }

        // Include current element
        current.push(candidates[index]);
        generate(index + 1, current, sum + candidates[index]);
        current.pop();

        // Exclude current element
        generate(index + 1, current, sum);
    }

    generate(0, [], 0);

    return result;
};