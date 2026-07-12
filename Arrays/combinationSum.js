// Time Complexity: O(2^target)                               ---     Optimal Approach
// Space Complexity: O(target)

var combinationSum = function (candidates, target) {
    let result = [];

    function backtrack(index, current, total) {
        // Target achieved
        if (total === target) {
            result.push([...current]);
            return;
        }

        // Out of bounds or exceeded target
        if (index === candidates.length || total > target) {
            return;
        }

        // Include current candidate
        current.push(candidates[index]);
        backtrack(index, current, total + candidates[index]);
        current.pop();

        // Exclude current candidate
        backtrack(index + 1, current, total);
    }

    backtrack(0, [], 0);

    return result;
};


// Time Complexity: O(n^target)                               ---     Brute Force
// Space Complexity: O(target)

var combinationSum = function (candidates, target) {
    let result = [];

    function generate(current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (sum > target) {
            return;
        }

        // Try every candidate at every step
        for (let num of candidates) {
            current.push(num);
            generate(current, sum + num);
            current.pop();
        }
    }

    generate([], 0);

    // Remove duplicate combinations
    let unique = new Set();
    let answer = [];

    for (let arr of result) {
        let sorted = [...arr].sort((a, b) => a - b);
        let key = sorted.join(",");

        if (!unique.has(key)) {
            unique.add(key);
            answer.push(sorted);
        }
    }

    return answer;
};