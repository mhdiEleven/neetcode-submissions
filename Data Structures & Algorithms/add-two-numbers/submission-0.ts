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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let curr1 = l1
        let curr2 = l2
        let size1 = 0
        let size2 = 0
        while(curr1 || curr2){
            if(curr1){
                curr1 = curr1.next
                size1++
            }
            if(curr2){
                curr2 = curr2.next
                size2++
            }
        }
        let max = (Math.max(size1,size2) == size1)?l1:l2
        let min = max == l1?l2:l1
        let result = new ListNode()
        let carry = 0
        let curr = result
        let out
        while(max){
            if(min){
                out = (max.val + min.val + carry)
                min = min.next
                
            } else{
                out = (max.val + carry)
            }
            max = max.next
            carry = Math.floor(out/10)
            curr.next =new ListNode( out%10)
            curr = curr.next
        }
        if (carry!==0){
            curr.next = new ListNode(carry)
        }
        return result.next
    }
}
