// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(n)

var isValid = function (s) {
    let str = s;

    // Keep removing valid bracket pairs
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