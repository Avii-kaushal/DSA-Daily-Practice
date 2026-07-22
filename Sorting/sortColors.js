// Time Complexity: O(n)                     
// Space Complexity: O(1)

var sortColors = function (nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // Count occurrences
    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    let index = 0;

    // Fill 0s
    while (count0--) {
        nums[index++] = 0;
    }

    // Fill 1s
    while (count1--) {
        nums[index++] = 1;
    }

    // Fill 2s
    while (count2--) {
        nums[index++] = 2;
    }
};