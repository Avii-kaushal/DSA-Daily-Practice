// Time Complexity: Exponential (O(2^(m+n)))       
// Space Complexity: O(m + n)

var isMatch = function (s, p) {

    function dfs(i, j) {

        // Pattern finished
        if (j === p.length) {
            return i === s.length;
        }

        let firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === ".");

        // Next character is '*'
        if (j + 1 < p.length && p[j + 1] === "*") {
            return (
                dfs(i, j + 2) || // Skip x*
                (firstMatch && dfs(i + 1, j)) // Use x*
            );
        }

        return firstMatch && dfs(i + 1, j + 1);
    }

    return dfs(0, 0);
};