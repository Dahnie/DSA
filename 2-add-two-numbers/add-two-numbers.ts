/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Daniel
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
    // Initialize val
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const sum = val1 + val2 + carry;
        const wholeNumber = sum % 10;
        const carryOver = Math.floor(sum / 10);
        carry = carryOver;
        current.next = new ListNode(wholeNumber);
        console.log({current, next: current?.next, dummyHead, l1, l2, })
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    

    
    return dummyHead.next;
};