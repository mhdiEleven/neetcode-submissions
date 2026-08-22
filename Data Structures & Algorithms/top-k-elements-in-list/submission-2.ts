class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        //in any order so mabye
        //store an object with a num and a letter
        let leaderboard = new Set([])
        //i want to imagine a leaderboard of all the top k numbers
        let stats = new Map<number,number>() //num => number of times it shows up
        for(let i of nums){
            
            stats.set(i,(stats.get(i)??0) +1)

            if (leaderboard.size <= k){leaderboard.add(i)

            }
            if(leaderboard.size > k){

                let min = Infinity
                let value
                leaderboard.forEach(item =>{
                    if(stats.get(item) < min ){
                        min = stats.get(item)
                        value =  item
                    }
                })
                leaderboard.delete(value)
            }
        }
        return [...leaderboard]
    }
}
