function countingSort(arr) {
    const max = Math.max(...arr);

    const count = new Array(max + 1).fill(0);

    for (let num of arr) {
        count[num]++;
    }

    let index = 0;

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }

    return arr;
}

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr));