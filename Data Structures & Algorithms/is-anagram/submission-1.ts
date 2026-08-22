class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length ) return false
        let List = new Map()
        for(let i =0 ; i<s.length ; i++){
            let e = s[i]
            // if the char isnt in the map add it to the map
            if (!List.has(e)){
                List.set(e,1)
            }else{//if it is in the list add one
                List.set(e,List.get(e)+1)
            }
            //now we have the letters in string S
            
        }
        //now we compare the letters in t to the list
        for(let i =0 ; i<s.length ; i++){
            let e = t[i]
            //exception handling if the letter isnt in the map at all
            if(!List.has(e)) return false
            else{
                //tripple nested if statements im sorry
                if(List.get(e) <=0) return false
                List.set(e,List.get(e)-1)
            }
        }
        return true
    }
}
