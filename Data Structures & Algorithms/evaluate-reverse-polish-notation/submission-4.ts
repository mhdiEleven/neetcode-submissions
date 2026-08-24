class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const op = new Set(["+","-","*","/"])
        let stack = []
        for(let i of tokens){
            if(op.has(i)){
                let value = i
                let x2 =Number( stack.pop() )
                let x1 =Number( stack.pop())
                if(value == "+") stack.push(x1+x2)
                if(value == "-") stack.push(x1-x2)
                if(value == "*") stack.push(x1*x2)
                if(value == "/") stack.push(Math.trunc(x1/x2))
            }else stack.push(Number(i))
        }
        return stack[0]
    }
}
