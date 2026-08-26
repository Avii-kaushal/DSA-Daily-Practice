// Time Complexity: O(n * k)                          
// Space Complexity: O(1)

var rotate = function (nums, k) {
    const n = nums.length;

    // Handle k greater than array length
    k = k % n;

    for (let i = 0; i < k; i++) {
        const last = nums.pop();

        // Add last element to the beginning
        nums.unshift(last);
    }
};