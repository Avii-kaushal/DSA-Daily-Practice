// Time Complexity: O(n).           ----- optimal approach
// Space Complexity: O(n)

var addBinary = function (a, b) {

    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {

        let sum = carry;

        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }

        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }

        result = (sum % 2) + result;

        carry = Math.floor(sum / 2);
    }

    return result;
};



// Time Complexity: O(n)
// Space Complexity: O(n)

var addBinary = function (a, b) {

    let num1 = parseInt(a, 2);
    let num2 = parseInt(b, 2);

    let sum = num1 + num2;

    return sum.toString(2);
};