class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        //i guess do a binary search of the index's and when thats done do another binary search
        let l = 0
        let r = matrix.length-1
        let y =0
        let m
        while(l<=r){
            m = Math.trunc((l+r)/2)
            if(target>=matrix[m][0] && target< (matrix[m+1]?.[0]??Infinity)){
                y = m
                break
            }else if (target> matrix[m][0]) l = m +1
            else r = m -1
        }
        //we found the y cordinate its located at now we apply binary search there
        //too
        l = 0
        let list = matrix[y]
        r = list.length-1
        while(l <= r){
            m =  Math.trunc((l+r)/2)
            if(list[m] == target) return true
            if(list[m] < target) l=m+1
            else r=m-1

        }
        return false
    }
}
