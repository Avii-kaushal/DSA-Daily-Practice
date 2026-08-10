// Time Complexity: O(n)                             
// Space Complexity: O(n)

var removeDuplicates = function (nums) {
    let result = [];
    let count = 0;
    let previous = null;

    for (let num of nums) {
        if (num !== previous) {
            count = 1;
            previous = num;
            result.push(num);
        } else if (count < 2) {
            count++;
            result.push(num);
        }
    }

    // Copy result back into nums
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return result.length;
};