/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode|null {
        let prev = null
        let curr = head
        let nxt
        while(curr){
            nxt = curr.next
            curr.next=prev
            prev = curr
            curr = nxt
        }
        return prev
        //genuintly i feel so dumb and i have no idea why this code works
        //must revisit
    }
}
