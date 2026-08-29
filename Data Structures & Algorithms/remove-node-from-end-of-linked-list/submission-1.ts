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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        //find the length of the head
        let curr = head
        let m = 0
        while(curr){
            m++
            curr = curr.next
        }
        let index = m-n-1
        console.log(index)
        curr = head
        if (m==1) return null
        if(index <0){
            head = head.next
            return head
        }
        while(index >0){
            index--
            curr = curr.next
        }
        curr.next = curr.next.next
        return head
    }
}
