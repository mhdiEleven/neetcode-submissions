class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length == 0) return 0
        let bestcount = 1
        let hashnums = new Set()
        for(let i of nums){
            hashnums.add(i)
        }
        for(let i of nums){
            let num = i
            let count = 1
            if(hashnums.has(num-1)) continue
            while(true){
                if(hashnums.has(num+1)){
                    num++
                    count++
                }else{
                    if (count > bestcount) bestcount=count
                    break
                }
            }
            
        }
        return bestcount
    }
}
