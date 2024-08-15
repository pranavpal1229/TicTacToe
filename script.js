let square_1 = document.querySelector("#button1");
let square_2 = document.querySelector("#button2");
let square_3 = document.querySelector("#button3");
let square_4 = document.querySelector("#button4");
let square_5 = document.querySelector("#button5");
let square_6 = document.querySelector("#button6");
let square_7 = document.querySelector("#button7");
let square_8 = document.querySelector("#button8");
let square_9 = document.querySelector("#button9");
let turn_header = document.querySelector("#turn-header");

let squareList = [
    { element: square_1, coordinates: [0, 0] },
    { element: square_2, coordinates: [0, 1] },
    { element: square_3, coordinates: [0, 2] },
    { element: square_4, coordinates: [1, 0] },
    { element: square_5, coordinates: [1, 1] },
    { element: square_6, coordinates: [1, 2] },
    { element: square_7, coordinates: [2, 0] },
    { element: square_8, coordinates: [2, 1] },
    { element: square_9, coordinates: [2, 2] }
];

const gameBoard = function(){
    let board = [['', '', ''], ['', '',''], ['','','']];
    return { board };
}();

let gameLogic = {
    currentPlayer: 'Player 1',
    currentVal: 'X',
    total_moves : 0,
    gameOver: false,  // Game over flag

    checkWinner : function(){
        const board = gameBoard.board;
        let i = 0;

        // Check rows
        for (let j = 0; j < 3; j++) {
            if (board[j][i] == board[j][i + 1] && board[j][i] == board[j][i + 2] && board[j][i] !== '') {
                return board[j][i];
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j] && board[i][j] !== '') {
                return board[i][j];
            }
        }

        // Check diagonals
        if (board[i][i] == board[i + 1][i + 1] && board[i][i] == board[2][2] && board[i][i] !== '') {
            return board[i][i];
        }

        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] !== '') {
            return board[1][1];
        }

        return "None";
    },

    playMove : function(index, val, element){
        if (this.gameOver) return;  // Prevent further moves if the game is over

        let i = index[0];
        let j = index[1];
        if (gameBoard.board[i][j] == "X" || gameBoard.board[i][j] == "O") {
            return;
        }

        gameBoard.board[i][j] = val;
        this.total_moves += 1;
        let head = document.createElement("h1");
        head.textContent = val;
        element.appendChild(head);

        const winner = this.checkWinner();
        if (winner === "X" || winner === "O") {
            turn_header.textContent = `${this.currentPlayer} Wins!`;
            this.gameOver = true;  // Set game over flag
            return;
        }

        if (this.currentPlayer == "Player 1") {
            this.currentPlayer = "Player 2";
            this.currentVal = "O";
            turn_header.textContent = "Player 2 Turn";
        } else {
            this.currentPlayer = "Player 1";
            this.currentVal = "X";
            turn_header.textContent = "Player 1 Turn";
        }

        if (this.total_moves == 9 && !this.gameOver) {
            turn_header.textContent = "Draw!";
            this.gameOver = true;  // Set game over flag
        }
    }
}

squareList.forEach(square => {
    square.element.addEventListener("click", () => gameLogic.playMove(square.coordinates, gameLogic.currentVal, square.element));
});

function createPlayer(name, symb) {
    return { name, symb };
}

let player1 = createPlayer("Player 1", "X");
let player2 = createPlayer("Player 2", "O");

