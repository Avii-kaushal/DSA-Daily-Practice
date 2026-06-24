// Time Complexity: O(max(n, m))                               ---     Optimal Approach
// Space Complexity: O(max(n, m))

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};


// Time Complexity: O(n+m)                                ---     Brute Force
// Space Complexity: O(n+m)

var addTwoNumbers = function (l1, l2) {
    let num1 = "";
    let num2 = "";

    while (l1) {
        num1 = l1.val + num1;
        l1 = l1.next;
    }

    while (l2) {
        num2 = l2.val + num2;
        l2 = l2.next;
    }

    let sum = BigInt(num1) + BigInt(num2);
    sum = sum.toString();

    let dummy = new ListNode(0);
    let curr = dummy;

    for (let i = sum.length - 1; i >= 0; i--) {
        curr.next = new ListNode(Number(sum[i]));
        curr = curr.next;
    }

    return dummy.next;
};