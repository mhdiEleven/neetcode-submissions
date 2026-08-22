class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen = new Map <number,number>()
        // the key is the value were looking for 
        // while the value is the index where its located
        //ex: [1,2,3,4] t=3 
        //map => 1:0 IE the number 1 is located at INDEX 0
        for(let i =0 ; i<nums.length;i++){
            let num = nums[i]
            let goal = target -num

            if(seen.has(goal)){
                return [seen.get(goal) , i]
            }
            seen.set(num,i)
        }
        return [0,0]
    }
}
