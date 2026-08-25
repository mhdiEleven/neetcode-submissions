class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        //we test a spesific b/h (banana per hour) and binary search it
        let l = 1
        let r = Math.max(...piles)
        let bestBH = 0
        let m 
        while(l<=r){
            m = Math.trunc((l+r)/2)

            //get the hours it takes to finish the pile eating m bananas  per hour
            let hours = 0
            
            for(let i = 0 ;i<piles.length ; i++){
                hours += Math.ceil(piles[i]/m)
                

            }
            if(hours>h) {
                l = m+1
                
                }
            else{ 
            r = m-1
            bestBH = m
            }

        }
        return bestBH

    }
}
