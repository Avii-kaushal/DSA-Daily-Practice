// Time Complexity: O(n log log n) --- Optimal Approach
// Space Complexity: O(n)

function countPrimes(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark multiples of i as non-prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}


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