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