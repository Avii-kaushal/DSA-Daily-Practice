


// Time Complexity: O(n)                      Linear Search  ---  Brute Force Approach
// Space Complexity: O(1)

function findPeakElement(nums) {

    let n = nums.length;

    for (let i = 0; i < n; i++) {

        // Check left neighbor
        let left = (i === 0) ? -Infinity : nums[i - 1];

        // Check right neighbor
        let right = (i === n - 1) ? -Infinity : nums[i + 1];

        // Current element is greater than both neighbors
        if (nums[i] > left && nums[i] > right) {
            return i;
        }
    }

    return -1;
}