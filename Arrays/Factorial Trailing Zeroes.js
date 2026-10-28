// Time Complexity: O(log₅ n) --- Optimal Approach
// Space Complexity: O(1)

function trailingZeroes(n) {
    let count = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}




// Time Complexity: O(n log n) --- Brute Force Approach
// Space Complexity: O(1)

function trailingZeroes(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;

        while (num % 5 === 0) {
            count++;
            num = Math.floor(num / 5);
        }
    }

    return count;
}