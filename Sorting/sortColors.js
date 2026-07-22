// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] === 0) {
            // Swap with low pointer
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }

        else if (nums[mid] === 1) {
            // 1 is already in the correct position
            mid++;
        }

        else {
            // Swap with high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};


// Time Complexity: O(n)                               ---     Brute Force
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