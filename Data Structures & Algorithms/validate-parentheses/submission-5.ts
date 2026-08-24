class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const open = new Set(['(','[','{'])
        const openIndex = new Map([
            ['(',')'],
            ['[',']'],
            ['{','}']
        ])
        let stack = []
        for(let i =0 ; i<s.length ; i++){
            if (open.has(s[i])) {
                stack.push(s[i])
                continue
            }
            let value = stack.pop()
            if (openIndex.get(value) == s[i]) continue
            return false
        }
        if(stack.length !== 0) return false
        return true
    }
}
