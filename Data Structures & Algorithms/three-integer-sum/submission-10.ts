class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        //revisiting 3sum
        nums = nums.sort((a,b)=> a-b)

        //to aviod duplicates were going to do everything normally and when were done
        //we skip if the 3 numbers next index is = to itsself
        let i = 0
        let result = []
        while(i<nums.length){
            let target = -nums[i]
            //twoSumTwo but target is -nums[i]
            let l = i+1
            let r = nums.length-1
            while(l<r){
                let value = nums[l]+nums[r]
                
                if(value == target) {
                    result.push([nums[l],nums[r],nums[i]])
                    //remove duplicates
                    while(nums[l] == nums[l+1]) l++
                    while(nums[r] == nums[r-1]) r--
                    r--

                }
                else if(value < target) l++
                else r--

            }
            while(nums[i]==nums[i+1]) i++
            i++
            r--
        }
        return result
        //now im actually proud of this
    }
}
