// Time Complexity: O(n²)                                            Optimized Approach  (Sorting + Two Pointers)
// Space Complexity: O(1)   (excluding output)

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([ nums[i], nums[left], nums[right]]);
                // Skip duplicate left values
                while ( left < right && nums[left] === nums[left + 1] ) {
                    left++;
                }
                // Skip duplicate right values
                while ( left < right && nums[right] === nums[right - 1] ) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};



// Time Complexity: O(n³)                                                       Brute Force Approach
// Space Complexity: O(k)   // k = number of unique triplets

var threeSum = function(nums) {
    let result = [];
    let seen = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {

                if (nums[i] + nums[j] + nums[k] === 0) {

                    let triplet = [nums[i], nums[j], nums[k]]
                        .sort((a, b) => a - b);

                    let key = triplet.join(",");

                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }

    return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result);