// Time Complexity: O(n * sqrt(max(nums)))                ---     Optimal Approach
// Space Complexity: O(1)

function sumFourDivisors(nums) {
    let total = 0;

    for (let num of nums) {

        let count = 0;
        let sum = 0;

        for (let i = 1; i * i <= num; i++) {

            if (num % i === 0) {

                let divisor1 = i;
                let divisor2 = num / i;

                // Add first divisor
                count++;
                sum += divisor1;

                // Add paired divisor
                if (divisor1 !== divisor2) {
                    count++;
                    sum += divisor2;
                }

                // More than 4 divisors
                if (count > 4) {
                    break;
                }
            }
        }

        // Exactly 4 divisors
        if (count === 4) {
            total += sum;
        }
    }

    return total;
}





// Time Complexity: O(n * max(nums))                ---     Brute Force
// Space Complexity: O(1)

function sumFourDivisors(nums) {
    let total = 0;

    for (let num of nums) {

        let count = 0;
        let sum = 0;

        // Check every possible divisor
        for (let i = 1; i <= num; i++) {

            if (num % i === 0) {
                count++;
                sum += i;
            }

            // More than 4 divisors means
            // this number is not useful
            if (count > 4) {
                break;
            }
        }

        // Add sum only if exactly 4 divisors
        if (count === 4) {
            total += sum;
        }
    }

    return total;
}


// Driver Code
let nums = [21, 4, 7];

console.log(sumFourDivisors(nums));

// Output:
// 32