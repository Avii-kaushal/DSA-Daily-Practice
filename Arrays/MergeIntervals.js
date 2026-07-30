// Time Complexity: O(n²)         
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