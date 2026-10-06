// Time Complexity: O(n)                      Number Conversion  ---  Brute Force Approach
// Space Complexity: O(n)

function plusOne(digits) {
    let num = BigInt(digits.join(""));
    num = num + 1n;

    return String(num).split("").map(Number);
}