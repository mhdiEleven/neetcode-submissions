class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let sizes =[]
        for(let str of strs){
            sizes.push(str.length)
        }
        let result = ''
        for(let i =0 ; i<strs.length ; i++){
            result += `${sizes[i]}#${strs[i]}`
        }
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        //string is written like this number#string 
        let i =0
        let stringSize
        let result =[]
        while(i<str.length){

            //were probably analizing a number so
            let currIndex = i
            while(str[i] !=='#'){
                i++
            }
            stringSize = Number(str.substring(currIndex,i))
            i++
            console.log(stringSize)
            result.push(str.substring(i,i+stringSize))
            i += stringSize
        }
        return(result)
    }
}
