// Time Complexity: O(2^n * n log n)  
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