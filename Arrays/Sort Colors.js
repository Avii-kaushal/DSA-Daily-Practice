// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var sortColors = function (nums) {
    let left = 0;
    let current = 0;
    let right = nums.length - 1;

    while (current <= right) {

        // Move 0 to the left
        if (nums[current] === 0) {
            [nums[left], nums[current]] =
                [nums[current], nums[left]];

            left++;
            current++;
        }

        // 1 is already in the correct middle section
        else if (nums[current] === 1) {
            current++;
        }

        // Move 2 to the right
        else {
            [nums[current], nums[right]] =
                [nums[right], nums[current]];

            right--;

            // Don't move current here because
            // the swapped value needs to be checked
        }
    }
};




// Time Complexity: O(n)                               ---     Brute Force
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