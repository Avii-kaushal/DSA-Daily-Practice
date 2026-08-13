// Time Complexity: O(m × n)     
// Space Complexity: O(n)

var minWindow = function (s, t) {
    let minLength = Infinity;
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        let count = new Map();

        for (let ch of t) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }

        let required = t.length;

        for (let j = i; j < s.length; j++) {
            let ch = s[j];

            if (count.has(ch) && count.get(ch) > 0) {
                count.set(ch, count.get(ch) - 1);
                required--;
            }

            // All characters from t are present
            if (required === 0) {
                if (j - i + 1 < minLength) {
                    minLength = j - i + 1;
                    answer = s.substring(i, j + 1);
                }

                break;
            }
        }
    }

    return answer;
};