// Time Complexity: O(n)                               ---     Optimal Approach
// Space Complexity: O(n)

var isValid = function (s) {
    let stack = [];

    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {
        // Push opening brackets
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } 
        // Check matching closing brackets
        else {
            if (stack.length === 0 || stack.pop() !== map[ch]) {
                return false;
            }
        }
    }

    // Stack should be empty if all brackets are matched
    return stack.length === 0;
};

// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(n)

var isValid = function (s) {
    let str = s;

    // Repeatedly remove valid pairs
    while (
        str.includes("()") ||
        str.includes("{}") ||
        str.includes("[]")
    ) {
        str = str.replace("()", "");
        str = str.replace("{}", "");
        str = str.replace("[]", "");
    }

    return str.length === 0;
};