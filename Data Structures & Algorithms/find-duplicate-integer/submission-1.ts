class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = nums[0]
        let fast = nums[nums[0]]
        while(slow !== fast){
            slow = nums[slow]
            fast = nums[nums[fast]]
        }
        let slownew= 0
        while(slow !== slownew){
            slow = nums[slow]
            slownew = nums[slownew]
        }
        return slow
    }
}
