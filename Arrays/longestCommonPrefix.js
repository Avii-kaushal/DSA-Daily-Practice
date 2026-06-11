// Time Complexity: O(n log n + m)   --- Even Better (Sorting Trick)
// Space Complexity: O(1)            --- Ignoring sorting's internal space

var longestCommonPrefix = function(strs) {
    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};


// Time Complexity: O(n * m)         --- Optimized Approach
// Space Complexity: O(1)

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};



// Time Complexity: O(n * m)         --- Brute Force Approach
// Space Complexity: O(1)

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (
                i >= strs[j].length ||
                strs[j][i] !== char
            ) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
};


let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));