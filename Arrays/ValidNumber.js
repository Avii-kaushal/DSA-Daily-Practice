// Time Complexity: O(n)                              
// Space Complexity: O(1)

var isNumber = function (s) {
    const pattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    return pattern.test(s);
};