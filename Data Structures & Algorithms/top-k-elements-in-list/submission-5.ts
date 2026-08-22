class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //now were going to solve it with something called bucket sort
        //step 1 create an empty array with size n
        let bucket:number[][] = Array(nums.length)

        let stats = new Map()
        for(let i of nums){
            stats.set(i,(stats.get(i)??0)+1)
        }//number =>
        //all numbers are counted so now we put them in bucket
        stats.forEach(function(k,v){
            bucket[k-1] = [...bucket[k-1]??[] ,v]
        })
        let result = []
        function check(){
            return(result.length == k)
        }
        for(let i = nums.length-1 ; i>=0 ; i--){
            if(result.length ==k || bucket[i] == undefined) continue

            for(let j of bucket[i]){
                
                result.push(j)
                
                if(result.length ==k ) continue
            }
        }
        return result
    }
}
