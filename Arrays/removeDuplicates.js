// Time Complexity: O(n)                                           Optimized Approach
// Space Complexity: O(1)
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};




// Time Complexity: O(n)                                             Brute Force Approach
// Space Complexity: O(n)
var removeDuplicates = function(nums) {
    let unique = [];

    for (let num of nums) {
        if (unique.length === 0 || unique[unique.length - 1] !== num) {
            unique.push(num);
        }
    }

    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }

    return unique.length;
};