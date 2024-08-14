const gameBoard = function(){
    let board = [['', '', ''], ['', '',''], ['','','']]
    return {board}
}() //initializes the board immediately

let gameLogic = {
    currentPlayer: 'Player 1',
    players: ['Player 1', 'Player 2'],
    total_moves : 0,

    checkWinner : function(){
        const board = gameBoard.board
        let i = 0
        for(let j = 0; j < 3; j++){
            if(board[j][i] == board[j][i + 1] && board[j][i] == board[j][i + 2]){
                return board[j][i]
        }
     }

        for(let j = 0; j < 3; j++){
            if(board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j]){
                return board[j][i]
            }
        }

        if(board[i][i] == board[i + 1][i + 1] && board[0][0] == board[2][2]){
            return board[0][0]
        }

        if(board[0][2] == board[[1][1]] && board[1][1] == board[2][0]){
            return board[1][1]
        }

        return "None"
    },

    playMove : function(index, val){
        let i = index[0]
        let j = index[1]
        gameBoard.board[i][j] = val
        if (this.checkWinner() == "X" || this.checkWinner() == "O"){
            console.log('hi')
        }
    }
}
board = gameBoard.board
gameLogic.playMove([0,0], 'X')
gameLogic.playMove([1,1], 'O')
gameLogic.playMove([2,2], 'X')
gameLogic.playMove([0,1], 'X')
gameLogic.playMove([0,2], 'X')



console.log(gameLogic.checkWinner())
console.log(board)


function createPlayer(name, symb){
    return {name, symb}
}

player1 = createPlayer("Player 1", "X")
player2  = createPlayer("player 2", "O")

