// Time Complexity: O(n)                      Carry Handling  ---  Optimal Approach
// Space Complexity: O(1)

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    // If all digits were 9
    digits.unshift(1);

    return digits;
}



// Time Complexity: O(n)                      Number Conversion  ---  Brute Force Approach
// Space Complexity: O(n)

function plusOne(digits) {
    let num = BigInt(digits.join(""));
    num = num + 1n;

    return String(num).split("").map(Number);
}