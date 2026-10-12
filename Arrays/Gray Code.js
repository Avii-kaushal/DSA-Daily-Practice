// Time Complexity: O(2^n * 2^n)              Backtracking  ---  Brute Force Approach
// Space Complexity: O(2^n)

function grayCode(n) {
    let total = 1 << n;
    let result = [0];
    let used = new Set([0]);

    function backtrack() {
        if (result.length === total) {
            // Last and first numbers must differ by one bit
            return countBits(result[result.length - 1]) === 1;
        }

        let last = result[result.length - 1];

        for (let bit = 0; bit < n; bit++) {
            let next = last ^ (1 << bit);

            if (next >= total || used.has(next)) continue;

            used.add(next);
            result.push(next);

            if (backtrack()) return true;

            result.pop();
            used.delete(next);
        }

        return false;
    }

    function countBits(x) {
        let count = 0;
        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }
        return count;
    }

    backtrack();
    return result;
}