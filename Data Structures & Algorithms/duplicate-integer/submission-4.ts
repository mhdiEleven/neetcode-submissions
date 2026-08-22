class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        //the optimal solution to this problem proabably involves hashamps
        let seen = []
        for(let i =0 ; i< nums.length; i++){

            if(seen.includes(nums[i])) {
                return true
            }else{
                seen.push(nums[i])

            }
        }
        return false
    }
}
