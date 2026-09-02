// Time Complexity: O(n)
// Space Complexity: O(n)

var containsDuplicate = function (nums) {

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);
    }

    return false;
};


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