// Time Complexity: O(n)                                           Even Better for Many Removals (Order Doesn't Matter) --    Optimized Approach
// Space Complexity: O(1)
var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;

    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }

    return n;
};




// Time Complexity: O(n)                                           Optimized Approach
// Space Complexity: O(1)
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};




// Time Complexity: O(n)                                             Brute Force Approach
// Space Complexity: O(n)
var removeElement = function(nums, val) {
    let temp = [];

    for (let num of nums) {
        if (num !== val) {
            temp.push(num);
        }
    }

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }

    return temp.length;
};