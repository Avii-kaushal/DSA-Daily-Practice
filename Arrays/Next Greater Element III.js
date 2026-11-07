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