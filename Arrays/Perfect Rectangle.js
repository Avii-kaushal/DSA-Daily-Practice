// Time Complexity: O(n²) --- Brute Force Approach
// Space Complexity: O(1)

function isRectangleCover(rectangles) {
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    let totalArea = 0;

    for (let [x1, y1, x2, y2] of rectangles) {
        minX = Math.min(minX, x1);
        minY = Math.min(minY, y1);
        maxX = Math.max(maxX, x2);
        maxY = Math.max(maxY, y2);

        totalArea += (x2 - x1) * (y2 - y1);
    }

    // Check every pair for overlap
    for (let i = 0; i < rectangles.length; i++) {
        let [x1, y1, x2, y2] = rectangles[i];

        for (let j = i + 1; j < rectangles.length; j++) {
            let [a1, b1, a2, b2] = rectangles[j];

            let overlapX = Math.max(x1, a1) < Math.min(x2, a2);
            let overlapY = Math.max(y1, b1) < Math.min(y2, b2);

            if (overlapX && overlapY) return false;
        }
    }

    let boundingArea = (maxX - minX) * (maxY - minY);

    return totalArea === boundingArea;
}