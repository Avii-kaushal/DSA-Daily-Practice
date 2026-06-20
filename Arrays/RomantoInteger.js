// Time Complexity: O(n)                                   ---   Optimal Approach
// Space Complexity: O(1)

var romanToInt = function(s) {

    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {

        const current = values[s[i]];
        const next = values[s[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};



// Time Complexity: O(n)                                   ---     Brute Force
// Space Complexity: O(1)

var romanToInt = function(s) {

    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,

        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };

    let result = 0;
    let i = 0;

    while (i < s.length) {

        const pair = s[i] + s[i + 1];

        if (map[pair]) {
            result += map[pair];
            i += 2;
        } else {
            result += map[s[i]];
            i++;
        }
    }

    return result;
};