// Time Complexity: O(log n) average, O(n) worst case
// Space Complexity: O(1)

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        else if (nums[mid] < nums[right]) {
            right = mid;
        } 
        else {
            right--;
        }
    }

    return nums[left];
};


// Time Complexity: O(n) --- Brute Force
// Space Complexity: O(1)

var findMin = function(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
};