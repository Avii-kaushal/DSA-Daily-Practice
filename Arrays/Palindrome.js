// Time Complexity: O(log n)                  ---   Better Approach     ---    Full Numer Reverce
// Space Complexity: O(1)

function isPalindrome(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}



// Time Complexity: O(log n)                 ---   Optimized Approach     ---    Half Numer Reverce
// Space Complexity: O(1)

function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === reversedHalf ||
           x === Math.floor(reversedHalf / 10);
}



// Time Complexity: O(n)                      ---   Brute Force Approach
// Space Complexity: O(n)

function isPalindrome(x) {
    let str = x.toString();

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Driver Code
let x = 121;

if (isPalindrome(x))
    console.log("true");
else
    console.log("false");