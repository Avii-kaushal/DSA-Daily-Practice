// Time Complexity: O(n^2)                      Brute Force Approach
// Space Complexity: O(1)

function longestConsecutive(nums) {
    let longest = 0;

    for (let num of nums) {
        let current = num;
        let count = 1;

        while (nums.includes(current + 1)) {
            current++;
            count++;
        }

        longest = Math.max(longest, count);
    }

    return longest;
}


// Driver Code
let nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));