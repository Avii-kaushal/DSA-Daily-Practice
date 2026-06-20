// Time Complexity: O(1)                                    ---   Optimal Approach
// Space Complexity: O(1)

var intToRoman = function(num) {

    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {

        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};



// Time Complexity: O(1)                                ---     Brute Force
// Space Complexity: O(1)

var intToRoman = function(num) {

    const thousands = [
        "", "M", "MM", "MMM"
    ];

    const hundreds = [
        "", "C", "CC", "CCC", "CD",
        "D", "DC", "DCC", "DCCC", "CM"
    ];

    const tens = [
        "", "X", "XX", "XXX", "XL",
        "L", "LX", "LXX", "LXXX", "XC"
    ];

    const ones = [
        "", "I", "II", "III", "IV",
        "V", "VI", "VII", "VIII", "IX"
    ];

    return (
        thousands[Math.floor(num / 1000)] +
        hundreds[Math.floor((num % 1000) / 100)] +
        tens[Math.floor((num % 100) / 10)] +
        ones[num % 10]
    );
};