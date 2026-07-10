// Time Complexity: O(n * m)                               ---     Optimal Approach
// Space Complexity: O(m)

var countAndSay = function (n) {
    let result = "1";

    for (let i = 2; i <= n; i++) {
        let current = "";
        let count = 1;

        for (let j = 1; j <= result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                current += count + result[j - 1];
                count = 1;
            }
        }

        result = current;
    }

    return result;
};


// Time Complexity: O(2ⁿ * m)                               ---     Brute Force (Recursive)
// Space Complexity: O(n + m)

var countAndSay = function (n) {

    function encode(str) {
        let result = "";
        let count = 1;

        for (let i = 1; i <= str.length; i++) {
            if (str[i] === str[i - 1]) {
                count++;
            } else {
                result += count + str[i - 1];
                count = 1;
            }
        }

        return result;
    }

    if (n === 1) {
        return "1";
    }

    return encode(countAndSay(n - 1));
};