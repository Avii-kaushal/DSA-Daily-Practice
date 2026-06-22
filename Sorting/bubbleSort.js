function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps were made, array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example
const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]