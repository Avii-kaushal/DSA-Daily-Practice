// Time Complexity: O(n)                            
// Space Complexity: O(1)

var sortColors = function (nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // Count 0s, 1s, and 2s
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count0++;
        } else if (nums[i] === 1) {
            count1++;
        } else {
            count2++;
        }
    }

    let index = 0;

    // Fill 0s
    while (count0 > 0) {
        nums[index++] = 0;
        count0--;
    }

    // Fill 1s
    while (count1 > 0) {
        nums[index++] = 1;
        count1--;
    }

    // Fill 2s
    while (count2 > 0) {
        nums[index++] = 2;
        count2--;
    }
};