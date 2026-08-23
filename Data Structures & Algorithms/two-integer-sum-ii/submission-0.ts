class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0
        let r = numbers.length -1
        //im guessing if there sum is > target we r-- and if its < we l++
        while(l !==r){
            let result = numbers[l] + numbers[r]
            if(result == target) return [l+1,r+1]
            if(result > target){
                //we need to reduce result by doing r--
                r--
            }else l++

        }
    }
}
