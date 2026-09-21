// Time Complexity: O(32) = O(1)              Bit Manipulation  ---   Optimal Approach
// Space Complexity: O(1)

function reverseBits(n) {

    let result = 0;

    for (let i = 0; i < 32; i++) {

        // Get the last bit of n
        let bit = n & 1;

        // Shift result left and add the extracted bit
        result = (result << 1) | bit;

        // Remove the last bit from n
        n = n >>> 1;
    }

    // Convert to unsigned 32-bit integer
    return result >>> 0;
}




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