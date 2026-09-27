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