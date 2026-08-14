
// Time Complexity: O(log n) average, O(n) worst case          ---     Optimal Approach
// Space Complexity: O(1)

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Target found
        if (nums[mid] === target) {
            return true;
        }

        // Duplicates make it impossible to determine
        // which half is sorted
        if (
            nums[left] === nums[mid] &&
            nums[mid] === nums[right]
        ) {
            left++;
            right--;
            continue;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {

            // Target lies inside the sorted left half
            if (
                nums[left] <= target &&
                target < nums[mid]
            ) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else {
            // Right half is sorted

            // Target lies inside the sorted right half
            if (
                nums[mid] < target &&
                target <= nums[right]
            ) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};



// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(1)

var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true;
        }
    }

    return false;
};