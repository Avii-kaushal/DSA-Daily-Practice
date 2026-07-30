// Time Complexity: O(n log n)                               ---     Optimal Approach
// Space Complexity: O(n)

var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    // Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1];
        let current = intervals[i];

        // Overlapping intervals
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};



// Time Complexity: O(n²)                               ---     Brute Force
// Space Complexity: O(n)

var merge = function (intervals) {
    let merged = true;

    while (merged) {
        merged = false;
        let result = [];

        let used = new Array(intervals.length).fill(false);

        for (let i = 0; i < intervals.length; i++) {
            if (used[i]) continue;

            let [start, end] = intervals[i];

            for (let j = i + 1; j < intervals.length; j++) {
                if (used[j]) continue;

                let [s, e] = intervals[j];

                // Check overlap
                if (!(end < s || e < start)) {
                    start = Math.min(start, s);
                    end = Math.max(end, e);
                    used[j] = true;
                    merged = true;
                }
            }

            result.push([start, end]);
        }

        intervals = result;
    }

    return intervals;
};