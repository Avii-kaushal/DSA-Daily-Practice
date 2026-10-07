// Time Complexity: O(n)                      Array + Reverse  ---  Brute Force Approach
// Space Complexity: O(n)

function reverseBetween(head, left, right) {
    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    let start = left - 1;
    let end = right - 1;

    while (start < end) {
        [values[start], values[end]] = [values[end], values[start]];
        start++;
        end--;
    }

    current = head;
    let i = 0;

    while (current !== null) {
        current.val = values[i++];
        current = current.next;
    }

    return head;
}