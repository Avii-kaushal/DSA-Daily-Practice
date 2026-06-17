// Time Complexity: O(n)        --- Optimal Two Pointer Approach
// Space Complexity: O(1)

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]) * width;

        maxWater = Math.max(maxWater, currentArea);

        // Move the pointer with smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};


// Time Complexity: O(n²)        --- Brute Force Approach
// Space Complexity: O(1)

var maxArea = function(height) {
    let maxWater = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let currentArea = Math.min(height[i], height[j]) * width;

            maxWater = Math.max(maxWater, currentArea);
        }
    }

    return maxWater;
};