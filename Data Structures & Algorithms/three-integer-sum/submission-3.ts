class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a,b) => a-b)
        console.log(nums)
        let result = new Set<number[]>()
        for( let i =0 ; i < nums.length ; i++){
            let target = -nums[i]
            //now we solve it like we solve twosumTwo
            let l = i+1
            let r = nums.length-1
            while(r>=l){
                //skip duplicates
                if (r == l) break
                r==target && r--
                //twosumTwo
                let num = nums[l] + nums[r]
                if(num == target) {
                    result.add([nums[i],nums[l],nums[r]])
                    l++    
                }
                if(num>target) r--
                if(num<target) l++
            }   
        }
        //duplicates have been a pain so i guess i have to write something to remove them 
        //brute force solution because were already O(n^2 who cares)
        for(let e1 of result){
            for(let e2 of result){
                let thesame=true
                if(e1 == e2) continue
                for(let i =0 ; i<3 ;i++){
                    if(e1[i] !== e2[i]) thesame=false
                }
                if (thesame) result.delete(e2)
                
            }
        }
        return [...result]
    }
}
