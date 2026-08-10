// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var removeDuplicates = function (nums) {
    // If length is <= 2, all elements are allowed
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 2;

    for (let i = 2; i < nums.length; i++) {

        // Allow current number if it is different
        // from the element two positions before
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};





// Time Complexity: O(n)                               ---     Brute Force
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