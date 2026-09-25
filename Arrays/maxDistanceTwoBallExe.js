// Time Complexity: O(n log(maxPosition - minPosition))       Binary Search  ---  Optimal Approach
// Space Complexity: O(1)

function maxDistance(position, m) {

    // Sort positions first
    position.sort((a, b) => a - b);

    let left = 1;
    let right = position[position.length - 1] - position[0];

    let answer = 0;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // Check if we can place m balls
        // with at least 'mid' distance
        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {

            if (position[i] - lastPosition >= mid) {

                count++;
                lastPosition = position[i];
            }

            if (count >= m) {
                break;
            }
        }

        // We successfully placed m balls
        if (count >= m) {

            answer = mid;

            // Try a larger minimum distance
            left = mid + 1;

        } else {

            // mid is too large
            right = mid - 1;
        }
    }

    return answer;
}






// Time Complexity: O((max - min) * n)       Brute Force Approach
// Space Complexity: O(1)

function maxDistance(position, m) {

    position.sort((a, b) => a - b);

    let maxPossible = position[position.length - 1] - position[0];
    let answer = 0;

    for (let distance = 1; distance <= maxPossible; distance++) {

        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {

            if (position[i] - lastPosition >= distance) {
                count++;
                lastPosition = position[i];
            }

            if (count >= m) {
                answer = distance;
                break;
            }
        }
    }

    return answer;
}