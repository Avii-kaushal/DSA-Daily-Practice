// Time Complexity: O(n × n!)    
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