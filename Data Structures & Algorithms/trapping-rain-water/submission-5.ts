class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        //idea start with pointer l if the next element is >=
        //then l moves left else r is created and moves instead 
        //untill it sees a bar that is >= to l whilekeepingtrack
        //of the area
        let l =0
        let i =1
        let result = 0
        for(let l = 0 ; l<height.length ; l++){
            if(height[l]<height[l+1]) continue
            //l represent the index of the left wall
            else{
                let gate = 0
                //gate is here to decrease the lower bound incase it doesnt find it
                for(gate=0; gate<height[l];gate++){
                    let r = l+1
                    let width = 0
                    let debt = 0
                    while(height[r]<(height[l]-gate) && r<height.length){
                        debt += height[r]
                        width ++
                        r++

                    }
                    //solution not found continue
                    if (r == height.length) continue
                    result += Math.min(height[l],height[r])*width-debt
                    l = r-1
                    break
                }
            }
        }
        return result
    }
}
