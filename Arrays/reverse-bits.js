// Time Complexity: O(32)              String Approach  ---   Brute Force Approach
// Space Complexity: O(32)

function reverseBits(n) {

    // Convert number to 32-bit binary string
    let binary = (n >>> 0).toString(2).padStart(32, "0");

    // Reverse the binary string
    let reversed = binary.split("").reverse().join("");

    // Convert binary back to number
    return parseInt(reversed, 2);
}


// Driver Code
let n = 43261596;

console.log(reverseBits(n));

// Output:
// 964176192