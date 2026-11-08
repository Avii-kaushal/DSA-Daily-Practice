// Time Complexity: O(d) --- Optimal Approach
// Space Complexity: O(d) for the digit array

var nextGreaterElement = function(n) {
    let digits = String(n).split("");
    let i = digits.length - 2;

    // Step 1: Find pivot
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    // No greater permutation exists
    if (i < 0) return -1;

    // Step 2: Find next greater digit
    let j = digits.length - 1;

    while (digits[j] <= digits[i]) {
        j--;
    }

    // Swap pivot and next greater digit
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 3: Reverse suffix
    let left = i + 1;
    let right = digits.length - 1;

    while (left < right) {
        [digits[left], digits[right]] =
        [digits[right], digits[left]];

        left++;
        right--;
    }

    let result = Number(digits.join(""));

    // Check 32-bit signed integer limit
    return result <= 2147483647 ? result : -1;
};







// Time Complexity: O(d! * d) --- Brute Force
// Space Complexity: O(d! * d)

var nextGreaterElement = function(n) {
    let digits = String(n).split("");
    let permutations = new Set();

    function generate(index) {
        if (index === digits.length) {
            permutations.add(digits.join(""));
            return;
        }

        for (let i = index; i < digits.length; i++) {
            [digits[index], digits[i]] = [digits[i], digits[index]];

            generate(index + 1);

            [digits[index], digits[i]] = [digits[i], digits[index]];
        }
    }

    generate(0);

    let result = Infinity;

    for (let num of permutations) {
        let value = Number(num);

        if (value > n && value < result) {
            result = value;
        }
    }

    return result <= 2147483647 ? result : -1;
};