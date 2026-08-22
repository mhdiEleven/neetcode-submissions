class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        //the optimal solution to this problem proabably involves hashamps
        let seen = new Set([])
        for(let i =0 ; i< nums.length; i++){

            if(seen.has(nums[i])) {
                return true
            }else{
                seen.add(nums[i])

            }
        }
        return false
    }
}
