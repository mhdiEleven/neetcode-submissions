class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
       //lets implement a sliding window
       let bestPrice = -Infinity
       for(let i =1 ; i<prices.length ; i++){
            let Index =0
            let s=prices.length -i-1
            while(Index<=s){
                let price = prices[Index +i]- prices[Index];
                (price > bestPrice) && (bestPrice = price)
                Index++
            }
       }
       if (bestPrice<0) return 0
       return bestPrice
    }
}
