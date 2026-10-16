// Time Complexity: O(n) --- Optimal Approach
// Space Complexity: O(n)

function findRepeatedDnaSequences(s) {
    let seen = new Set();
    let repeated = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
        let sequence = s.substring(i, i + 10);

        if (seen.has(sequence)) {
            repeated.add(sequence);
        } else {
            seen.add(sequence);
        }
    }

    return [...repeated];
}




// Time Complexity: O(n * 10) --- Brute Force Approach
// Space Complexity: O(n)

function findRepeatedDnaSequences(s) {
    let count = new Map();
    let result = [];

    for (let i = 0; i <= s.length - 10; i++) {
        let sequence = s.substring(i, i + 10);

        count.set(sequence, (count.get(sequence) || 0) + 1);

        if (count.get(sequence) === 2) {
            result.push(sequence);
        }
    }

    return result;
}