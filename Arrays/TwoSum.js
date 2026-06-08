// Time Complexity: O(n)                      Hash Set Approach  ---   Better Approach
// Space Complexity: O(n)

function twoSum(arr, target) {
    let seen = new Set();

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}



// Time Complexity: O(n^2)                      Brute Force Approach
// Space Complexity: O(1)
function twoSum(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
        
            // Check if the sum of the current pair
            // equals the target
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}
// Driver Code
let arr = [0, -1, 2, -3, 1];
let target = -2;

if (twoSum(arr, target))
    console.log("true");
else 
    console.log("false");
