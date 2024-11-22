
(function gameFlow () {

    const game = {
        board: [
            ["", "", ""], 
            ["", "", ""], 
            ["", "", ""], 
        ], 
        playerOne: true, 
    }

    function createPlayers (playerOne, playerTwo) {
        return {playerOne, playerTwo}
    }

    function playerMoves () {
        game.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                cell.addEventListener("click", () => {
                    if(cell=== "") {
                        if (playerOne) {
                            game.board[rowIndex][colIndex] = "X";
                            playerOne = false; 
                            changeDisplay(cell);
                        }
                        else {
                            game.board[rowIndex][colIndex] = "O"; 
                            playerOne = true;
                            changeDisplay(cell);
                        }
                    }
                })
            })
        })
    }

    function changeDisplay (cell) {
        if (playerOne) {
            const xIcon = document.createElement("p")
            xIcon.textContent = "X"; 
            cell.appendChild(xIcon);
        }

        else {
            const oIcon = document.createElement("p")
            oIcon.textContent = "O"; 
            cell.appendChild(oIcon);
        }
    }

    const players = createPlayers("Player 1", "Player 2");
    playerMoves();      

})();


