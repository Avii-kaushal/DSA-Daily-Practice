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