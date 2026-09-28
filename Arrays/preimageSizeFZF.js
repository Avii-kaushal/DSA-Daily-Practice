// Time Complexity: O(log k * log k)        Binary Search  ---  Optimal Approach
// Space Complexity: O(1)

function preimageSizeFZF(k) {

    let left = 0;
    let right = 5 * (k + 1);

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        let zeroes = countZeroes(mid);

        if (zeroes < k) {

            // Need a larger x
            left = mid + 1;

        } else {

            // zeroes >= k
            right = mid - 1;
        }
    }

    // left = first x where f(x) >= k

    if (countZeroes(left) === k) {
        return 5;
    }

    return 0;
}


function countZeroes(x) {

    let count = 0;

    while (x > 0) {

        x = Math.floor(x / 5);
        count += x;
    }

    return count;
}





// Time Complexity: O(k log k)             Brute Force Approach
// Space Complexity: O(1)

function preimageSizeFZF(k) {

    let x = 0;

    while (true) {

        let zeroes = 0;
        let n = x;

        while (n > 0) {
            n = Math.floor(n / 5);
            zeroes += n;
        }

        if (zeroes === k) {
            return 5;
        }

        if (zeroes > k) {
            return 0;
        }

        x++;
    }
}