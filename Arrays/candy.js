// Time Complexity: O(N) --- Optimal Approach
// Space Complexity: O(N)

var candy = function(ratings) {

    let n = ratings.length;

    // Give every child at least one candy
    let candies = new Array(n).fill(1);

    // Pass 1: Left to Right
    for (let i = 1; i < n; i++) {

        // Current rating is higher than previous rating
        if (ratings[i] > ratings[i - 1]) {

            candies[i] = candies[i - 1] + 1;
        }
    }

    // Pass 2: Right to Left
    for (let i = n - 2; i >= 0; i--) {

        // Current rating is higher than next rating
        if (ratings[i] > ratings[i + 1]) {

            candies[i] = Math.max(
                candies[i],
                candies[i + 1] + 1
            );
        }
    }

    // Calculate minimum total candies
    let total = 0;

    for (let i = 0; i < n; i++) {

        total += candies[i];
    }

    return total;
};




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