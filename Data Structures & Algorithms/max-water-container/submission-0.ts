class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0
        let r = heights.length -1
        let bestResult = -Infinity

        while(l<=r){
            let width = r-l
            let height = Math.min(heights[l],heights[r])
            bestResult =Math.max(bestResult, Math.min(height)*width)
            if(heights[l] == height) l++
            if(heights[r] == height) r--
        }
        return bestResult
    }
}
