class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        //given a list of strings group them by anagrams
        //first solution store every string's chars into a map and each one
        function makeHash(s:string):Map<string,number>{
            let result:Map<string,number> = new Map()
            //key: letter value: times it appears
            for(let i of s){
                result.set(i,(result.get(i)??0)+1)
            }
            return result
        }
        function mapTstr(map:Map<string,number>):string{
            return [...map.entries()].sort().map(([char,count]) => char + count).join("")
        }
        //i was going to create a map of maps but that is insane so instead 
        let sorted = new Set()
        //were going to loop over every string and see if its sorted then compare it
        let result:string[][] = []
        let buffer = new Map()
        //buffer.set(mapTstr(makeHash(str)),str)
        let index = 0
        for(let i =0 ; i <strs.length;i++){
            let str = strs[i]
            let key = mapTstr(makeHash(str))
            if(buffer.has(key)){

                result[buffer.get(key)!].push(str)
            }else{

                buffer.set(key,index)
                result[index]= [str]
                index++
            }
        }
        return result

    }
}
