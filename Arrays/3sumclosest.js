// Time Complexity: O(n²)           --- Optimal Two Pointers Approach
// Space Complexity: O(1)

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            if (
                Math.abs(target - currentSum) <
                Math.abs(target - closestSum)
            ) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum; // Exact match found
            }
        }
    }

    return closestSum;
};



// Time Complexity: O(n³)           --- Brute Force Approach
// Space Complexity: O(1)

var threeSumClosest = function(nums, target) {
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let currentSum = nums[i] + nums[j] + nums[k];

                if (
                    Math.abs(target - currentSum) <
                    Math.abs(target - closestSum)
                ) {
                    closestSum = currentSum;
                }
            }
        }
    }

    return closestSum;
};