// Time Complexity: O(n)              Single Pass  ---   Optimal Approach
// Space Complexity: O(n)

function insert(intervals, newInterval) {

    let result = [];

    let i = 0;
    let n = intervals.length;

    // 1. Add intervals that are completely
    // before the new interval
    while (
        i < n &&
        intervals[i][1] < newInterval[0]
    ) {
        result.push(intervals[i]);
        i++;
    }

    // 2. Merge all overlapping intervals
    while (
        i < n &&
        intervals[i][0] <= newInterval[1]
    ) {
        newInterval[0] = Math.min(
            newInterval[0],
            intervals[i][0]
        );

        newInterval[1] = Math.max(
            newInterval[1],
            intervals[i][1]
        );

        i++;
    }

    // Add the merged new interval
    result.push(newInterval);

    // 3. Add remaining intervals
    // that are completely after newInterval
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}





// Time Complexity: O(n log n)              Sort + Merge  ---   Brute Force Approach
// Space Complexity: O(n)

function insert(intervals, newInterval) {

    // Add the new interval
    intervals.push(newInterval);

    // Sort intervals by starting point
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];

    for (let interval of intervals) {

        // If result is empty OR
        // current interval does not overlap
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            result.push(interval);
        }

        // Overlapping intervals
        else {
            result[result.length - 1][1] =
                Math.max(
                    result[result.length - 1][1],
                    interval[1]
                );
        }
    }

    return result;
}


// Driver Code
let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];

console.log(insert(intervals, newInterval));

// Output:
// [[1, 5], [6, 9]]