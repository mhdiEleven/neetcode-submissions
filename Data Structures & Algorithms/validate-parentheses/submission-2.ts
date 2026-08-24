class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const open = new Set(['(','[','{'])
        const close = new Set([')',']','}'])
        const openIndex = new Map([
            ['(',')'],
            ['[',']'],
            ['{','}']
        ])
        let stack = []
        for(let i =0 ; i<s.length ; i++){
            console.log(stack)
            if (open.has(s[i])) stack.push(s[i])
            if(close.has(s[i])){
                let value = stack.pop()
                if (openIndex.get(value) == s[i]) continue
                return false

            }
            
        }
        if(stack.length !== 0) return false
        return true
    }
}
