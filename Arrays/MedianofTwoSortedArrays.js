// Time Complexity: O(log(min(m, n)))                           ----        optimized Approach (Binary Search)
// Space Complexity: O(1)

var findMedianSortedArrays = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {

        let partitionX = Math.floor((left + right) / 2);
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        let maxLeftX =
            partitionX === 0 ? -Infinity : nums1[partitionX - 1];

        let minRightX =
            partitionX === m ? Infinity : nums1[partitionX];

        let maxLeftY =
            partitionY === 0 ? -Infinity : nums2[partitionY - 1];

        let minRightY =
            partitionY === n ? Infinity : nums2[partitionY];

        if (
            maxLeftX <= minRightY &&
            maxLeftY <= minRightX
        ) {

            if ((m + n) % 2 === 0) {
                return (
                    Math.max(maxLeftX, maxLeftY) +
                    Math.min(minRightX, minRightY)
                ) / 2;
            }

            return Math.max(maxLeftX, maxLeftY);
        }

        if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }

    return 0;
};



// Time Complexity: O(m + n)                                        ---     Brute Force
// Space Complexity: O(m + n)

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i++]);
    }

    while (j < nums2.length) {
        merged.push(nums2[j++]);
    }

    const n = merged.length;

    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)];
    }

    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
};