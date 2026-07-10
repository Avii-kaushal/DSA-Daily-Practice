// Time Complexity: O(2ⁿ * m)   
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