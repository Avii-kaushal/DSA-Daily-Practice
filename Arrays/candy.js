// Time Complexity: O(N²) --- Brute Force Approach
// Space Complexity: O(N)

var candy = function(ratings) {

    let n = ratings.length;

    // Give every child at least one candy
    let candies = new Array(n).fill(1);

    let changed = true;

    // Repeat until all neighboring conditions are satisfied
    while (changed) {

        changed = false;

        for (let i = 1; i < n; i++) {

            // Current child has higher rating
            if (ratings[i] > ratings[i - 1] &&
                candies[i] <= candies[i - 1]) {

                candies[i] = candies[i - 1] + 1;
                changed = true;
            }

            // Previous child has higher rating
            else if (ratings[i] < ratings[i - 1] &&
                     candies[i - 1] <= candies[i]) {

                candies[i - 1] = candies[i] + 1;
                changed = true;
            }
        }
    }

    // Calculate total candies
    return candies.reduce((sum, candy) => sum + candy, 0);
};