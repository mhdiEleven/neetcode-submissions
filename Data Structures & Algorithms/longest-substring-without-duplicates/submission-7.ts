class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0
        let w = 0
        let list = new Set()
        let best = 1
        if (s.length == 0) return 0
        while(w<s.length){

            if(!list.has(s[w])){
                list.add(s[w])
                w++
            }
            else{

                while(s[l] !==s[w]){
                    list.delete(s[l])

                    l++
                }
                list.delete(s[l])
                l++
            }
            best = Math.max(best,w-l)
        }
        return best
        
    }
}
