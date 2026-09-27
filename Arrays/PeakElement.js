// Time Complexity: O(log n)              Binary Search  ---  Optimal Approach
// Space Complexity: O(1)

function findPeakElement(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {

            // Going uphill
            // Peak must be on the right
            left = mid + 1;

        } else {

            // Going downhill
            // Peak is at mid or on the left
            right = mid;
        }
    }

    return left;
}


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