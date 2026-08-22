class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let r =0
        let l = s.length -1

        while(r-l <0 ){
            //check if l or r are alpha numirical and do whats intended
            if(/[^a-zA-Z0-9]/.test(s[r])){
                console.log(`left pointer detected invalid value :${s[r]}`)
                r++
                continue
            }
            if(/[^a-zA-Z0-9]/.test(s[l])){
                console.log(`right pointer detected invalid value :${s[l]}`)
                l--
                continue
            }
            //now compare to see if there the same letters
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }
            l--
            r++
        }
        return true
    }
}
