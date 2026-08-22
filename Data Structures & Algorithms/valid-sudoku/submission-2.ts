class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        //check rows anc colums
        for(let i =0 ; i<9 ;i++){
            let row = new Set()
            let col = new Set()
            for (let j = 0 ; j <9 ;j++){
                console.log(col)
                if(!(row.has(board[i][j]))&&board[i][j] !=='.'){
                    row.add(board[i][j])
                }else if(row.has(board[i][j])) return false
                if(!(col.has(board[j][i]))&&board[j][i] !=='.'){
                    col.add(board[j][i])
                }else if(col.has(board[j][i])) return false
            }

        }
        //now for the squares
        for(let r = 0 ; r <9 ; r = r+3){
            for(let c =0 ; c<9 ; c = c+3){
                //Note board[r][c] represent the starting point of the square
                let check = new Set()
                for(let rp = r ; rp<r+3 ; rp++){
                    for(let cp =c ; cp<c+3 ; cp++){
                        //i know too many nested for loops but who cares
                        if(!(check.has(board[rp][cp]))&&board[rp][cp] !=='.'){
                            check.add(board[rp][cp])
                        }else if(check.has(board[rp][cp])) return false
                    }
                }
                console.log("next square")
            }
        }
        return true


    }
}
