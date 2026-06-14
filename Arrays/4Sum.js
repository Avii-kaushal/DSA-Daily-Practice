// Time Complexity: O(n³)                                       Optimized Approach (Sorting + Two Pointers)
// Space Complexity: O(1)]

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    let n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate second numbers
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1;
            let right = n - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([ nums[i], nums[j], nums[left], nums[right] ]);
                    left++;
                    right--;
                    // Skip duplicate third numbers
                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }
                    // Skip duplicate fourth numbers
                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};




// Time Complexity: O(n⁴)                               Better Approach (Brute Force + Set)
// Space Complexity: O(k)
var fourSum = function(nums, target) {
    let result = [];
    let set = new Set();
    let n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            for (let k = j + 1; k < n - 1; k++) {
                for (let l = k + 1; l < n; l++) {

                    let sum = nums[i] + nums[j] + nums[k] + nums[l];
                    if (sum === target) {
                        let quad = [ nums[i], nums[j], nums[k], nums[l]
                        ].sort((a, b) => a - b);
                        let key = quad.join(",");
                        if (!set.has(key)) {
                            set.add(key);
                            result.push(quad);
                        }
                    }
                }
            }
        }
    }
    return result;
};