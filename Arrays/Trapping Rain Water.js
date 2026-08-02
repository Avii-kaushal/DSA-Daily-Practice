// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var trap = function (height) {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;
        } else {

            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
};



// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(n)

var trap = function (height) {
    const n = height.length;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let water = 0;

    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return water;
};