
// Time Complexity: O(n)                  Simulation Approach  ---   Brute Force Approach
// Space Complexity: O(1)

function numWaterBottles(numBottles, numExchange) {
    let total = 0;
    let empty = 0;

    while (numBottles > 0) {

        // Drink all full bottles
        total += numBottles;

        // All consumed bottles become empty
        empty += numBottles;

        // Exchange empty bottles for new full bottles
        numBottles = Math.floor(empty / numExchange);

        // Keep remaining empty bottles
        empty = empty % numExchange;
    }

    return total;
}


// Driver Code
let numBottles = 9;
let numExchange = 3;

console.log(numWaterBottles(numBottles, numExchange));

// Output:
// 13