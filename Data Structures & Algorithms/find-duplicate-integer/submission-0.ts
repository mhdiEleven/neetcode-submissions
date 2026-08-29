class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let seen = new Set()
        for(let i of nums){
            if (seen.has(i)){
                return i
            }else{seen.add(i)}
        }
    }
}
