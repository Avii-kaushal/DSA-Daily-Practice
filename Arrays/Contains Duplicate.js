// Time Complexity: O(n²)
// Space Complexity: O(1)

var containsDuplicate = function (nums) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};