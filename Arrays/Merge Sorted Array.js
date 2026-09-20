// Time Complexity: O((m + n) log(m + n))     Sort Approach  ---   Brute Force Approach
// Space Complexity: O(m + n)

function merge(nums1, m, nums2, n) {

    // Add nums2 elements into nums1
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    // Sort the complete array
    nums1.sort((a, b) => a - b);
}


// Driver Code
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);

// Output:
// [1, 2, 2, 3, 5, 6]