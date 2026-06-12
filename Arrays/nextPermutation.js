// Time Complexity:  O(n)                                         Optimized Approach
// Space Complexity: O(1)
var nextPermutation = function(nums) {
    let n = nums.length;

    // 1. Find pivot
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 2. Find next greater element
    if (i >= 0) {
        let j = n - 1;

        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3. Reverse suffix
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};



// Time Complexity: O(n! × n)                                             Brute Force Approach
// Space Complexity: O(n! × n)
var nextPermutation = function(nums) {
    let perms = [];

    function backtrack(start) {
        if (start === nums.length) {
            perms.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    const original = [...nums];
    backtrack(0);

    perms.sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return 0;
    });

    let idx = perms.findIndex(
        perm => perm.join(',') === original.join(',')
    );

    let next = perms[(idx + 1) % perms.length];

    for (let i = 0; i < nums.length; i++) {
        nums[i] = next[i];
    }
};

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);