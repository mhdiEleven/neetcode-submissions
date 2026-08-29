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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let fast = head
        let slow = head
        while(fast.next && fast.next.next){
            fast = fast.next.next
            slow = slow.next
        }
        console.log(fast)
        console.log(slow)
        let prev = null
        let curr = slow
        while(curr){
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt 
        }
        console.log(prev)
        curr = head
        while(curr){
            let nxt1 = curr.next
            let nxt2 = prev.next
            curr.next=prev
            prev.next = nxt1
            prev = nxt2
            curr = nxt1
        }
    }
}
