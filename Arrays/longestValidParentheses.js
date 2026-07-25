// Time Complexity: O(n²)                       
// Space Complexity: O(1)

var longestValidParentheses = function (s) {

    function isValid(str) {
        let balance = 0;

        for (let ch of str) {
            if (ch === "(") {
                balance++;
            } else {
                balance--;

                if (balance < 0) {
                    return false;
                }
            }
        }

        return balance === 0;
    }

    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 2; j <= s.length; j += 2) {
            let sub = s.substring(i, j);

            if (isValid(sub)) {
                maxLength = Math.max(maxLength, sub.length);
            }
        }
    }

    return maxLength;
};