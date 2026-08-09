// Time Complexity: O(n²)                               ---     Optimal Approach
// Space Complexity: O(n)

var getPermutation = function (n, k) {
    // Store numbers [1, 2, ..., n]
    let numbers = [];

    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    // Convert k to 0-based index
    k--;

    let result = "";

    // Pre-calculate factorials
    let factorial = new Array(n + 1).fill(1);

    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    // Select each digit
    for (let i = n; i >= 1; i--) {
        let blockSize = factorial[i - 1];

        let index = Math.floor(k / blockSize);

        result += numbers[index];

        // Remove selected number
        numbers.splice(index, 1);

        k %= blockSize;
    }

    return result;
};



// Time Complexity: O(n × n!)                   ---     Brute Force
// Space Complexity: O(n × n!)

var getPermutation = function (n, k) {
    let numbers = [];

    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    let count = 0;
    let answer = "";

    function backtrack(start) {
        if (answer !== "") return;

        if (start === numbers.length) {
            count++;

            if (count === k) {
                answer = numbers.join("");
            }

            return;
        }

        for (let i = start; i < numbers.length; i++) {
            [numbers[start], numbers[i]] = [numbers[i], numbers[start]];

            backtrack(start + 1);

            [numbers[start], numbers[i]] = [numbers[i], numbers[start]];
        }
    }

    backtrack(0);

    return answer;
};