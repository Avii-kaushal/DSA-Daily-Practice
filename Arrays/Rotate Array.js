// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(1)

var rotate = function (nums, k) {
    const n = nums.length;

    // Handle k greater than array length
    k = k % n;

    function reverse(left, right) {
        while (left < right) {
            [nums[left], nums[right]] =
                [nums[right], nums[left]];

            left++;
            right--;
        }
    }

    // Reverse entire array
    reverse(0, n - 1);

    // Reverse first k elements
    reverse(0, k - 1);

    // Reverse remaining elements
    reverse(k, n - 1);
};




// Time Complexity: O(n * k)                           ---     Brute Force
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