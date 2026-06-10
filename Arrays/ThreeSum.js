// Time Complexity: O(n³)
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