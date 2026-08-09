// Time Complexity: O(n × n!)                 
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