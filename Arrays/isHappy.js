// Time Complexity: O(log n)                  Floyd's Cycle Detection  ---  Optimal Approach
// Space Complexity: O(1)

function isHappy(n) {

    let slow = n;
    let fast = n;

    do {

        slow = sumOfSquares(slow);

        fast = sumOfSquares(sumOfSquares(fast));

    } while (slow !== fast);

    return slow === 1;
}


function sumOfSquares(n) {

    let sum = 0;

    while (n > 0) {

        let digit = n % 10;

        sum += digit * digit;

        n = Math.floor(n / 10);
    }

    return sum;
}




// Time Complexity: O(log n)                  HashSet Approach  ---  Brute Force Approach
// Space Complexity: O(log n)

function isHappy(n) {

    let seen = new Set();

    while (n !== 1) {

        // Cycle detected
        if (seen.has(n)) {
            return false;
        }

        seen.add(n);

        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return true;
}