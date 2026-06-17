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