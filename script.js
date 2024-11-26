
(function tacTacToe () {

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

let gameBoard = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];

let currentPlayer = "X"; 
let gameState = false; 

const startGame = function () {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    statusText.textContent = `It's ${currentPlayer}'s turn`;
    restartBtn.addEventListener("click", restartGame);
    gameState = true; 
}

const cellClicked = function () {
    const cellIndex = this.getAttribute("data-cell-index");
    if (gameBoard[cellIndex] != "" || gameState != true) {
        return; 
    }    
    updateCell(this, cellIndex);
    checkWinner(); 
    if (gameState) {
        switchPlayer();
    }
}

const updateCell = function (cell, index) {
    gameBoard[index] = currentPlayer; 
    cell.textContent = currentPlayer; 
}

const switchPlayer = function () {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
    statusText.textContent = `${currentPlayer}'s turn`; 
}

const checkWinner = function () {
    let roundWon = false; 

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = gameBoard[condition[0]];
        const cellB = gameBoard[condition[1]];
        const cellC = gameBoard[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }

        if (cellA === cellB && cellB === cellC) {
            roundWon = true; 
        }

        if (roundWon) {
            statusText.textContent = `${currentPlayer} wins!`;
            gameState = false;
            break;
        }
    }   
}

const restartGame = function () {
    currentPlayer = "X";
    gameState = true;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `It's ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
}

startGame();
})();
