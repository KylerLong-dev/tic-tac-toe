
function gameFlow () {

    const game = {
        board: [
            ["", "", ""], 
            ["", "", ""], 
            ["", "", ""], 
        ]
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
                            changeDisplay();
                        }
                        else {
                            game.board[rowIndex][colIndex] = "O"; 
                            playerOne = true;
                            changeDisplay();
                        }
                    }
                })
            })
        })
    }

    function changeDisplay () {
        const cellDiv = document.querySelector(".cell")

        if (playerOne) {
            const xIcon = document.createElement("p")
            xIcon.textContent = "X"; 
            cellDiv.appendChild(xIcon);
        }

        else {
            const oIcon = document.createElement("p")
            oIcon.textContent = "O"; 
            cellDiv.appendChild(oIcon);
        }
    }

}



