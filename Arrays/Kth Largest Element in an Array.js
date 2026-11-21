// Time Complexity: O(N log N) --- Brute Force Approach
// Space Complexity: O(N) --- Sorting implementation dependent

var findKthLargest = function(nums, k) {

    // Sort array in descending order
    nums.sort((a, b) => b - a);

    // Return kth largest element
    return nums[k - 1];
};




// Time Complexity: O(N) Average, O(N²) Worst Case
// Space Complexity: O(1) --- Optimal Approach

var findKthLargest = function(nums, k) {

    let n = nums.length;

    // Convert kth largest into kth smallest index
    let target = n - k;

    // Partition array around a random pivot
    function partition(left, right) {

        // Choose random pivot to reduce worst-case likelihood
        let randomIndex =
            left + Math.floor(Math.random() * (right - left + 1));

        // Move pivot to the end
        [nums[randomIndex], nums[right]] =
            [nums[right], nums[randomIndex]];

        let pivot = nums[right];

        let i = left;

        // Move smaller elements to the left
        for (let j = left; j < right; j++) {

            if (nums[j] <= pivot) {

                [nums[i], nums[j]] =
                    [nums[j], nums[i]];

                i++;
            }
        }

        // Place pivot in its correct position
        [nums[i], nums[right]] =
            [nums[right], nums[i]];

        return i;
    }

    let left = 0;
    let right = n - 1;

    // Continue until target index is found
    while (left <= right) {

        let pivotIndex = partition(left, right);

        if (pivotIndex === target) {

            return nums[pivotIndex];
        }

        // Search left side
        if (pivotIndex > target) {

            right = pivotIndex - 1;
        }

        // Search right side
        else {

            left = pivotIndex + 1;
        }
    }
};