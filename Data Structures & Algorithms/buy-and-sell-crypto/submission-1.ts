class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let bestProfit = -Infinity
        for(let i = 0 ; i<prices.length ; i++){
            for(let j =0 ; j<=i ; j++){
                let profit = prices[prices.length-i-1+j]- prices[j]
                if (profit>bestProfit) bestProfit=profit
            }
        }
        return bestProfit
    }
}
