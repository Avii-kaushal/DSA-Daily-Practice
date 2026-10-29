// Time Complexity: O(n * √n) --- Brute Force Approach
// Space Complexity: O(1)

function countPrimes(n) {
    let count = 0;

    function isPrime(num) {
        if (num < 2) return false;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}