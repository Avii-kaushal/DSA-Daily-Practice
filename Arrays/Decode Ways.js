// Time Complexity: O(2^n)                      Recursion  ---  Brute Force Approach
// Space Complexity: O(n)

function numDecodings(s) {
    function solve(i) {
        if (i === s.length) return 1;

        if (s[i] === "0") return 0;

        // Decode one digit
        let ways = solve(i + 1);

        // Decode two digits if between 10 and 26
        if (i + 1 < s.length) {
            let num = Number(s.substring(i, i + 2));

            if (num >= 10 && num <= 26) {
                ways += solve(i + 2);
            }
        }

        return ways;
    }

    return solve(0);
}