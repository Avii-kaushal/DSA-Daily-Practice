// Time Complexity: O(3^4 * n)                         ---     Optimal Approach
// Space Complexity: O(n)

var restoreIpAddresses = function (s) {
    const result = [];
    const current = [];

    function backtrack(start) {

        // We have exactly 4 IP parts
        if (current.length === 4) {

            // All digits must be used
            if (start === s.length) {
                result.push(current.join("."));
            }

            return;
        }

        // Try 1, 2, or 3 digits
        for (let end = start; end < Math.min(start + 3, s.length); end++) {

            const part = s.slice(start, end + 1);

            // Leading zero is invalid
            if (part.length > 1 && part[0] === "0") {
                break;
            }

            // Value must be <= 255
            if (Number(part) > 255) {
                break;
            }

            current.push(part);

            // Move to the next part
            backtrack(end + 1);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0);

    return result;
};




// Time Complexity: O(3^4 * n)                         ---     Brute Force
// Space Complexity: O(n)

var restoreIpAddresses = function (s) {
    const result = [];

    function isValid(part) {
        // Empty part
        if (part.length === 0) {
            return false;
        }

        // Leading zero
        if (part.length > 1 && part[0] === "0") {
            return false;
        }

        // Must be between 0 and 255
        const num = Number(part);

        return num >= 0 && num <= 255;
    }

    // Try every possible position for 3 dots
    for (let i = 1; i <= 3; i++) {
        for (let j = i + 1; j <= i + 3; j++) {
            for (let k = j + 1; k <= j + 3; k++) {

                const part1 = s.slice(0, i);
                const part2 = s.slice(i, j);
                const part3 = s.slice(j, k);
                const part4 = s.slice(k);

                // IP must have exactly 4 valid parts
                if (
                    isValid(part1) &&
                    isValid(part2) &&
                    isValid(part3) &&
                    isValid(part4)
                ) {
                    result.push(
                        `${part1}.${part2}.${part3}.${part4}`
                    );
                }
            }
        }
    }

    return result;
};