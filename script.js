
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("statusText");
const restartBtn = document.querySelector("restartBtn");

let gameBoard = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8]
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
    
}

const updateCell = function () {

}

const switchPlayer = function () {

}

const checkWinner = function () {

}

const restartGame = function () {

}

startGame();