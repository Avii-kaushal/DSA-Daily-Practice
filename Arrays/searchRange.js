// Time Complexity: O(log n)                               ---     Optimal Approach
// Space Complexity: O(1)

var searchRange = function (nums, target) {

    function findFirst() {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                right = mid - 1; // Continue searching on the left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    function findLast() {
        let left = 0, right = nums.length - 1;
        let ans = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                ans = mid;
                left = mid + 1; // Continue searching on the right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }

    return [findFirst(), findLast()];
};


// Time Complexity: O(n)                               ---     Brute Force
// Space Complexity: O(1)

var searchRange = function (nums, target) {
    let first = -1;
    let last = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }

    return [first, last];
};