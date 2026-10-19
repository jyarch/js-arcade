let playerO = "O";
let playerX = "X";
let currPlayer = playerO;
let currentPlayerDisplay;
//               0   1   2   3   4   5   6   7   8
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameCells;
let gameOver = false;
let restartGameButton;

let winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal winning conditions
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical winning conditions
    [0, 4, 8], [2, 4, 6]             //diagonal winning conditions
];

window.onload = function(){
    gameCells = document.getElementsByClassName("game-cell");
    for(let cell of gameCells){
        cell.addEventListener("click", placeCell);
    }
    restartGameButton = document.getElementById("game-restart-button");
    restartGameButton.addEventListener("click", restartGame);

    currentPlayerDisplay = document.getElementById("current-player");
    currentPlayerDisplay.innerHTML = currPlayer;
}

function placeCell(){

    if(gameOver) return;

    const index = parseInt(this.getAttribute("data-cell-index"));
    if(gameBoard[index] != ""){
        return;
    }

    this.innerText = currPlayer;
    gameBoard[index] = currPlayer;

    currPlayer = (currPlayer == playerO) ? playerX : playerO;
    currentPlayerDisplay.innerText = currPlayer;
    checkWin();
}

function checkWin(){

    for(winCondition of winningConditions){
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];

        if(a == b && b == c && a != ""){
            for(let i = 0 ; i < gameBoard.length ; i++){
                if(winCondition.includes(i)){
                    gameCells[i].classList.add("winning-game-cell");
                }
            }
            gameOver = true;
            return;
        }
    }  
}

function restartGame(){

    //base board settings
    gameOver = false;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currPlayer = playerO;
    currentPlayerDisplay.innerText = currPlayer;    

    //reset all cells to base
    for(let cell of gameCells){
        cell.innerText = "";
        cell.classList.remove("winning-game-cell");
    }
}
