class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let sol =1
        let zerocount = 0

        for(let i of nums){
            if (i ==0){
                zerocount = zerocount+1
                continue
            }
            sol = sol*i
        }
        if(zerocount>1){
            return(Array(nums.length).fill(0))
        }
        let output:number[] = []
        for (let i =0 ; i<nums.length ; i++){
            if((zerocount==1) && nums[i] !== 0) output.push(0)
            else if(zerocount==0){
                output.push(sol/nums[i])
            }else{
                output.push(sol)
            }
        }
        return output
    }
}
